const Joi = require('joi');
const projectModel = require('../../models/ProjectModel');
const logModel = require('../../models/LogModel');
const { INVALID_DATA, ERROR_500 }  = require('../../../constants/errorCodes');

const schema = Joi.object().keys({
  employeeId: Joi.string().guid({version: "uuidv4"}).optional(),
  projectId: Joi.string().guid({version: "uuidv4"}).optional(),
});

module.exports = async (req, res) => {
  let { project, employee } = req.query;
  let params = {};
  try{
    params = await schema.validateAsync({
      projectId: project,
      employeeId: employee,
    });
  } catch (e){
    res.status(500).send(INVALID_DATA(e.details));
    return;
  }

  try{
    const projectStatData = await projectModel.getStat(params.projectId);
    const projectLogStatData = await logModel.getProjectStat(params.projectId);
    const employeeLogStatData = await logModel.getEmployeeStat(params);

    const { total: projectStat } = projectStatData.toJSON();
    const { total: projectLogStat } = projectLogStatData.toJSON();
    const { total: employeeLogStat } = employeeLogStatData.toJSON();

    const data = {
      projectStat,
      projectLogStat,
      employeeLogStat
    }
    res.status(200).send({
      data: data,
      msg: 'Project Stats'
    })
  }catch (e){
    res.status(500).send(ERROR_500(e))
  }
}