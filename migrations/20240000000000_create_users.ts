import { QueryInterface } from "sequelize";
import * as faker from "faker";

export const up = async (migration_interface: QueryInterface) => {
  const users = [];
  // Генерация 1 миллиона пользователей
  for (let i = 0; i < 1000000; i++) {
    users.push({
      first_name: faker.name.firstName(),
      last_name: faker.name.lastName(),
      age: faker.datatype.number({ min: 18, max: 100 }),
      gender: faker.name.gender(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  // Вставляем данные в таблицу Users
  await migration_interface.bulkInsert("Users", users);
};
export const down = async (migration_interface: QueryInterface) =>
  await migration_interface.bulkDelete("Users", {}, {});
