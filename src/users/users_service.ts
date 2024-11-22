import { Injectable } from "@nestjs/common";
import { User } from "./users_modules";
import { InjectModel } from "@nestjs/sequelize";
import { Create_user_dto } from "./create_user.dto";
// десь логика эндпоинтов, получить/добавить данные
@Injectable()
export class Users_service {
  constructor(@InjectModel(User) private user_repository: typeof User) {}

  async create_user(dto: Create_user_dto) {
    const user = await this.user_repository.create(dto);
    return user;
  }

  async get_all_users() {
    const users = await this.user_repository.findAll();
    return users;
  }
}
