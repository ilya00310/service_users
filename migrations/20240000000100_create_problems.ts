import { QueryInterface } from "sequelize";
import * as faker from "faker";

export const up = async (migration_interface: QueryInterface) => {
  const problems = [];
  // Генерация 1 миллиона пользователей
  for (let i = 0; i < 1000001; i++) {
    const randomUser = Math.floor(Math.random() * 1000001);
    problems.push({
      product_id: randomUser,
      problem: faker.datatype.boolean(),
      createdAt: new Date(),
      updatedAt: new Date(),
    });
  }

  // Вставляем данные в таблицу Users
  await migration_interface.bulkInsert("Problems", problems);
};
export const down = async (migration_interface: QueryInterface) =>
  await migration_interface.bulkDelete("Problems", {}, {});
