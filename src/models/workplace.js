const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Workplace extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    // eslint-disable-next-line no-unused-vars
    static associate(models) {
      // define association here
    }
  }

  Workplace.init(
    {
      id: {
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.BIGINT,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING(128),
      },
      description: {
        allowNull: true,
        type: DataTypes.TEXT('tiny'),
      },
    },
    {
      sequelize,
      timestamps: true,
      tableName: 'workplaces',
      modelName: 'Workplace',
    }
  );

  return Workplace;
};
