"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "batch",
      [
        {
          id: 1,
          reference: "123456",
          sku: "sun-beds",
          quantity: 10,
          eta: new Date(2021, 11, 24),

          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          reference: "1234567",
          sku: "sun-beds",
          quantity: 25,
          eta: new Date(),
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 3,
          reference: "12345678",
          sku: "sun-beds",
          quantity: 25,
          eta: new Date(2021, 10, 25),
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
    await queryInterface.bulkInsert(
      "order",
      [
        {
          id: 1,
          address: "London",
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          id: 2,
          address: "Paris",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "order-line",
      [
        {
          id: 1,
          sku: "deck-chairs",
          quantity: 15,
          order_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );

    await queryInterface.bulkInsert(
      "batch-allocation",
      [
        {
          id: 1,
          batch_id: 1,
          order_line_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete(
      "batch-allocation",
      null,
      bulkDeleteOptions
    );
    await queryInterface.bulkDelete("order-line", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("order", null, bulkDeleteOptions);
    await queryInterface.bulkDelete("batch", null, bulkDeleteOptions);
  },
};
