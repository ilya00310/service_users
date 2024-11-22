import { Body, Controller, Get, Post } from "@nestjs/common";
import { Create_user_dto } from "./create_user.dto";
import { Users_service } from "./users_service";
// здесь эндпоинты
@Controller("users")
export class Users_controller {
  constructor(private users_service: Users_service) {}
  // для создания пользователя post зпрос

  @Post()
  create(@Body() user_dto: Create_user_dto) {
    return this.users_service.create_user(user_dto);
  }

  @Get()
  get_all() {
    return this.users_service.get_all_users();
  }
}
