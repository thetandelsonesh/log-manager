const { fn, col } = require('sequelize');
const { log, employee, project } = require('../../db/models');

exports.create = (data) => log.create(data);

exports.getAll = (params) => {
  const options = {
    include: [{
      model: employee,
      attributes: ['name', 'employeeId', 'designation']
    },{
      model: project,
      attributes: ['name', 'client', 'estimate']
    }],
    order: [
      ['logDate', 'DESC']
    ],
    limit: params.limit,
    offset: params.offset,
    where: {}
  }

  if(params.employeeId){
    options.where.employeeId = params.employeeId
  }
  if(params.projectId){
    options.where.projectId = params.projectId
  }
  if(params.logDate){
    options.where.logDate = params.logDate
  }

  return log.findAndCountAll(options);
};

exports.getProjectStat = (projectId) => {
  const options = {
    attributes: [
      [fn('sum', col('log_time')), 'total']
    ]
  }
  if(projectId){
    options.where = {
      projectId: projectId
    }
  }
  return  log.findOne(options)
};

exports.getEmployeeStat = (params) => {
  const options = {
    attributes: [
      [fn('sum', col('log_time')), 'total']
    ],
    where: {}
  }
  if(params.projectId){
    options.where.projectId = params.projectId;
  }
  if(params.employeeId){
    options.where.employeeId = params.employeeId;
  }
  return  log.findOne(options)
};

