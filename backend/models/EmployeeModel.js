const { Op } = require('sequelize');
const { employee } = require('../../db/models');

exports.getOne = (id) => {
  return employee.findOne({
    where: {id}
  });
}

exports.getAll = (search) => {
  console.log(search);
  const options = {
    order: [
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
          employeeId: {
            [Op.like]: `%${search}%`
          }
        },
        {
          designation: {
            [Op.like]: `%${search}%`
          }
        }
      ]
    }
  }

  return employee.findAll(options);
};