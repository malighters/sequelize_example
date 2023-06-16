'use strict';

/** @type {import('sequelize-cli').Migration} */
import { QueryInterface, DataTypes, QueryTypes } from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await queryInterface.bulkInsert('Dogs', [
            {
              name: "Neo",
              color: "red & amber",
              tail_length: 22,
              weight: 32,
            },
            {
              name: "Jessy",
              color: "black & white",
              tail_length: 7,
              weight: 14,
            }
          ]);
        }
    ),

    down: (queryInterface: QueryInterface): Promise<void> => queryInterface.sequelize.transaction(
        async (transaction) => {
          await queryInterface.bulkDelete('Dogs', {}, {});
        }
    )
};

