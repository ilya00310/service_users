import { Column, Model, Table, DataType } from "sequelize-typescript";
// Чтобы класс появился в бд, его нужно пометить как table
interface User_creation {
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
}

@Table({ tableName: "users" })
// во втором дженерике указываем обязательные поля
export class User extends Model<User, User_creation> {
  // декоратор превращает их в колонки
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @Column({ type: DataType.STRING, allowNull: false })
  first_name: string;

  @Column({ type: DataType.STRING, allowNull: false })
  last_name: string;

  @Column({ type: DataType.INTEGER, allowNull: false })
  age: number;

  @Column({ type: DataType.STRING, allowNull: false })
  gender: string;
}
