import { User } from "src/users/users_modules";
import {
  Column,
  Model,
  Table,
  DataType,
  BelongsTo,
  ForeignKey,
} from "sequelize-typescript";
// Чтобы класс появился в бд, его нужно пометить как table
interface Problem_creation {
  problem: boolean;
}

@Table({ tableName: "problems_users" })
// во втором дженерике указываем обязательные поля
export class Problem extends Model<Problem, Problem_creation> {
  // декоратор превращает их в колонки
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ForeignKey(() => User)
  @Column({ type: DataType.INTEGER, allowNull: false })
  user_id: number;
  @BelongsTo(() => User)
  user: User;

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  problem: boolean;
}
