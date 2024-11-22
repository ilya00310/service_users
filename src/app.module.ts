import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users/users_modules";
import { Problem } from "./problems/problems_modules";
import { Problem_module } from "./problems/problems_module";
import { User_module } from "./users/users_module";
import { ConfigModule } from "@nestjs/config";
// экспортируем класс appModule и добавляем декоратор(Оболчка, добавляющая функциональность)
// Докоратор принимает export/import, контроллер и провайдер
// здесь регистрируем эндпоинты
@Module({
  controllers: [],
  // в провайдерах переиспользуемая логика (логика контроллеров)
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: `.env`,
    }),
    SequelizeModule.forRoot({
      dialect: "postgres",
      host: process.env.DB_HOST,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      models: [User, Problem],
      autoLoadModels: true,
    }),
    User_module,
    Problem_module,
  ],
})
export class AppModule {}
