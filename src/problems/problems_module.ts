import { Module } from "@nestjs/common";
import { Problem_controllers } from "./problems_controller";
import { Problems_service } from "./problems_service";
import { SequelizeModule } from "@nestjs/sequelize";
import { Problem } from "./problems_modules";
// здесь мы создали таблицу в бд,без данных
@Module({
  controllers: [Problem_controllers],
  providers: [Problems_service],
  imports: [SequelizeModule.forFeature([Problem])],
})
export class Problem_module {}
