const path = require('path');
const express = require('express');

const cors = require('cors');
const rateLimiter = require('express-rate-limit');
const helmet = require('helmet');

const apiKey = require('./constants/apiKey');
const { NO_X_API_TOKEN } = require('./constants/errorCodes');

const apiProjects = require('./backend/api/projects');
const apiEmployees = require('./backend/api/employees');
const apiLogs = require('./backend/api/logs');

const app = express();

// security
app.use(cors());
// app.use(helmet());
app.use(rateLimiter({
  windowMs: 10 * 60 * 1000, // 10 minutes
  max: 300 // limit each IP to 300 requests per windowMs
}));

// middleware for api token check, since we dont have user auth
const authenticate = (req, res, next) => {
  apiKey === req.header('x-api-key') ? next() : res.status(401).send(NO_X_API_TOKEN)
};

// payload
app.use(express.json());

// expose react build folder
app.use('/',express.static(path.join(__dirname, 'frontend/build')));

// apis
app.use('/api/project', authenticate, apiProjects);
app.use('/api/log', authenticate, apiLogs);
app.use('/api/employee', authenticate, apiEmployees);


// start express app to listen for requests
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});