const Joi = require('joi').extend(require('@hapi/joi-date'));

const logModel = require('../../models/LogModel');
const projectModel = require('../../models/ProjectModel');
const employeeModel = require('../../models/EmployeeModel');

const { INVALID_DATA, ERROR_500, NO_DATA_FOUND }  = require('../../../constants/errorCodes');

const schema = Joi.object().keys({
  employeeId: Joi.string().guid({version: "uuidv4"}).required(),
  projectId: Joi.string().guid({version: "uuidv4"}).required(),
  logDate: Joi.date().format("YYYY-MM-DD").raw().required(),
  logTime: Joi.number().integer().greater(0).required(),
});

module.exports = async (req, res) => {
  let { data } = req.body;
  let finalData = {};
  try{
    finalData = await schema.validateAsync(data);
  } catch (e){
    res.status(500).send(INVALID_DATA(e.details));
    return;
  }

  try{
    const project = !!await projectModel.getOne(finalData.projectId);
    const employee = !!await employeeModel.getOne(finalData.employeeId);
    if(!(project && employee)){
      res.status(404).send(NO_DATA_FOUND);
      return;
    }

    const data = await logModel.create(finalData);
    res.status(200).send({
      data: data,
      msg: 'Log has been added successfully!'
    });
  }catch (e){
    res.status(500).send(ERROR_500(e))
  }
}