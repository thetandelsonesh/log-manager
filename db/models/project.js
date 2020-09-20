'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class project extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      project.hasMany(models.log);
    }
  };
  project.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING(120)
    },
    info: {
      type: DataTypes.TEXT
    },
    client: {
      type: DataTypes.STRING(120)
    },
    clientEmailId: {
      type: DataTypes.STRING(120),
      field: 'client_email_id'
    },
    estimate: {
      type: DataTypes.INTEGER.UNSIGNED
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
    modelName: 'project',
    underscored: true,
  });
  return project;
};