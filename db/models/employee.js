'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class employee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      employee.hasMany(models.log);
    }
  };
  employee.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(120),
    },
    dob: {
      type: DataTypes.DATEONLY,
    },
    emailId: {
      type: DataTypes.STRING(120),
      field: 'email_id'
    },
    gender: {
      type: DataTypes.ENUM,
      values:['MALE','FEMALE', 'OTHERS'],
    },
    employeeId: {
      type: DataTypes.STRING(50),
      field: 'employee_id'
    },
    designation: {
      type: DataTypes.STRING(120)
    },
    createdAt: {
      type: DataTypes.DATE,
      field: 'created_at'
    },
    updatedAt: {
      type: DataTypes.DATE,
      field: 'updated_at'
    }
  }, {
    sequelize,
    modelName: 'employee',
    underscored: true,
  });
  return employee;
};