'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class log extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      log.belongsTo(models.employee);
      log.belongsTo(models.project);
    }
  };
  log.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    employeeId: {
      type: DataTypes.UUID,
      field: 'employee_id'
    },
    projectId: {
      type: DataTypes.UUID,
      field: 'project_id'
    },
    logDate: {
      type: DataTypes.DATEONLY,
      field: 'log_date'
    },
    logTime: {
      type: DataTypes.INTEGER.UNSIGNED,
      field: 'log_time'
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
    modelName: 'log',
    underscored: true,
  });
  return log;
};