const { faker } = require("@faker-js/faker");
const users = [];
const batchSize = 10000;

module.exports = {
  up: async (migration_interface) => {
    for (let i = 0; i < 1000001; i++) {
      users.push({
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        age: faker.number.int({ min: 18, max: 100 }),
        gender: faker.person.gender(),
        problem: faker.datatype.boolean(),
        createdAt: new Date(),
        updatedAt: new Date(),
      });

      if (users.length === batchSize || i === 1000000) {
        await migration_interface.bulkInsert("users", users);
        users.length = 0;
      }
    }
  },

  down: async (migration_interface) =>
    await migration_interface.bulkDelete("users", {}, {}),
};
