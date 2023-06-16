'use strict';
import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      // here go all migration changes
      await queryInterface.createTable('Dogs', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.UUID,
          unique: true,
        },
        name: {
          allowNull: false,
          type: DataTypes.TEXT,
          unique: true,
        },
        color: {
          allowNull: false,
          type: DataTypes.TEXT,
        },
        tail_length: {
          allowNull: true,
          type: DataTypes.SMALLINT,
        },
        weight: {
          allowNull: true,
          type: DataTypes.SMALLINT,
        }
      });
    }
),

down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
    async (transaction) => {
      // here go all migration undo changes
      await queryInterface.dropTable('Dogs');
    }
)

};
