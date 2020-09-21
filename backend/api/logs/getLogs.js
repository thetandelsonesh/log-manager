const Joi = require('joi').extend(require('@hapi/joi-date'));

const logModel = require('../../models/LogModel');

const { INVALID_DATA, ERROR_500 }  = require('../../../constants/errorCodes');

const schema = Joi.object().keys({
  employeeId: Joi.string().guid({version: "uuidv4"}).optional(),
  projectId: Joi.string().guid({version: "uuidv4"}).optional(),
  logDate: Joi.date().format("YYYY-MM-DD").raw().optional(),
  page: Joi.number().integer().greater(0).required(),
});

module.exports = async (req, res) => {
  let { employee, project, logDate, page = 1  } = req.query;
  let params = {
    employeeId: employee,
    projectId: project,
    logDate,
    page,
  };
  try{
    params = await schema.validateAsync(params);
  } catch (e){
    res.status(500).send(INVALID_DATA(e.details));
    return;
  }

  params.limit = 25;
  params.offset = ((parseInt(params.page) - 1) * params.limit);

  try{
    const result = await logModel.getAll(params);
    const data = {
      list: result.rows,
      total: result.count
    }
    res.status(200).send({
      data: data,
      msg: 'Log List!'
    });
  }catch (e){
    res.status(500).send(ERROR_500(e))
  }
}