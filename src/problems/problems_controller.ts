import { Body, Controller, Get, Post } from "@nestjs/common";
import { Create_problem_dto } from "./create_problems.dto";
import { Problems_service } from "./problems_service";
// здесь эндпоинты
@Controller("users")
export class Problem_controllers {
  constructor(private problems_service: Problems_service) {}
  // для создания пользователя post зпрос

  @Post()
  create(@Body() problem_dto: Create_problem_dto) {
    return this.problems_service.create_problem(problem_dto);
  }

  @Get()
  get_all() {
    return this.problems_service.get_all_problems();
  }
}
