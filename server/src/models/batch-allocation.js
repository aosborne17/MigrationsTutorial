"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class BatchAllocation extends Model {}
  BatchAllocation.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      batchId: {
        type: DataTypes.INTEGER,
        field: "batch_id",
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "batch",
          key: "id",
        },
      },
      orderLineId: {
        type: DataTypes.INTEGER,
        field: "order_line_id",
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "order-line",
          key: "id",
        },
      },
      createdAt: {
        type: DataTypes.DATE,
        field: "created_at",
        allowNull: false,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        field: "updated_at",
      },
    },
    {
      sequelize,
      modelName: "BatchAllocation",
      tableName: "batch-allocation",
      freezeTableName: true,
    }
  );
  return BatchAllocation;
};
