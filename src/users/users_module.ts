import { Module } from "@nestjs/common";
import { Users_controller } from "./users_controller";
import { Users_service } from "./users_service";
import { SequelizeModule } from "@nestjs/sequelize";
import { User } from "./users_modules";

@Module({
  controllers: [Users_controller],
  providers: [Users_service],
  imports: [SequelizeModule.forFeature([User])],
})
export class User_module {}
