import { Body, Controller, Get, Post, Patch } from "@nestjs/common";
import { Create_user_dto } from "./create_user.dto";
import { Users_service } from "./users_service";

@Controller("users")
export class Users_controller {
  constructor(private users_service: Users_service) {}

  @Post()
  create(@Body() user_dto: Create_user_dto) {
    return this.users_service.create_user(user_dto);
  }

  @Get()
  get_all() {
    return this.users_service.get_all_users();
  }
  @Patch("problem")
  correct_problems() {
    return this.users_service.correct_problems_users();
  }
}
