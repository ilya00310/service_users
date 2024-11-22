import { Injectable } from "@nestjs/common";
import { Problem } from "./problems_modules";
import { InjectModel } from "@nestjs/sequelize";
import { Create_problem_dto } from "./create_problems.dto";
// десь логика эндпоинтов, получить/добавить данные
@Injectable()
export class Problems_service {
  constructor(
    @InjectModel(Problem) private problem_repository: typeof Problem
  ) {}

  async create_problem(dto: Create_problem_dto) {
    const problem = await this.problem_repository.create(dto);
    return problem;
  }

  async get_all_problems() {
    const problems = await this.problem_repository.findAll();
    return problems;
  }
}
