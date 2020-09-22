const { Op, fn, col } = require('sequelize');
const { project } = require('../../db/models');

exports.getOne = (id) => {
  return project.findOne({
    where: {id}
  });
}


exports.getAll = (search, minimal) => {
  const options = {
    order: [
      ['created_at', 'DESC']
    ]
  }

  if(minimal){
    options.attributes = ['id', 'name'];
    options.order = [
      ['name', 'ASC']
    ]
  }

  if(search){
    options.where = {
      [Op.or]: [
        {
          name: {
            [Op.like]: `%${search}%`
          }
        },
        {
          client: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    }
  }

  return project.findAll(options);
};


exports.getStat = (projectId) => {
  const options = {
    attributes: [
      [fn('sum', col('estimate')), 'total']
    ]
  }
  if(projectId){
    options.where = {
      id: projectId
    }
  }
  return  project.findOne(options)
};