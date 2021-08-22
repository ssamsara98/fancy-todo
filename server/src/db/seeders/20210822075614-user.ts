'use strict';

import { DataTypes, QueryInterface } from 'sequelize';
import { hashPassword } from '../../utils/bcrypt.helper';

export default {
  up: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          id: 1,
          name: 'Sulthon Abdul Malik',
          email: 'sulthon.abdmalik@gmail.com',
          password: await hashPassword('asdf1234'),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface, DT: typeof DataTypes) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', {}, {});
  },
};
