import { Injectable } from "@nestjs/common";
import { User } from "./users_modules";
import { InjectModel } from "@nestjs/sequelize";
import { Create_user_dto } from "./create_user.dto";

@Injectable()
export class Users_service {
  constructor(@InjectModel(User) private user_model: typeof User) {}

  async create_user(dto: Create_user_dto) {
    const user = await this.user_model.create(dto);
    return user;
  }

  async get_all_users() {
    const users = await this.user_model.findAll();
    return users;
  }
  async correct_problems_users(): Promise<number> {
    const countTrueProblem = await this.user_model.count({
      where: { problem: true },
    });

    await this.user_model.update(
      { problem: false },
      { where: { problem: true } }
    );

    return countTrueProblem;
  }
}
