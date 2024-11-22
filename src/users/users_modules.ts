import { Column, Model, Table, DataType } from "sequelize-typescript";
interface User_creation {
  first_name: string;
  last_name: string;
  age: number;
  gender: string;
  problem: boolean;
}

@Table({ tableName: "users", timestamps: true })
export class User extends Model<User, User_creation> {
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

  @Column({ type: DataType.BOOLEAN, allowNull: false })
  problem: boolean;
}
