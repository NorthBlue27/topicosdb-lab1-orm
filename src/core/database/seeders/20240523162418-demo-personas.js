'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      {
        schema: 'sistemas',
        tableName: 'personas',
      },
      [
        {
          per_ape_pat: 'GONZALES',
          per_ape_mat: 'GUTIERREZ',
          per_nombres: 'BRANDON JOSEPH',
          per_nacionalidad: 'PE',
          per_num_doc: '12345678',
          per_num_tel: '123456789',
          per_genero: 'M',
        },
      ],
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query(
      'TRUNCATE TABLE sistemas.personas CASCADE;',
    );
    await queryInterface.sequelize.query(
      'ALTER SEQUENCE sistemas.personas_per_id_seq RESTART WITH 1',
    );
  },
};
