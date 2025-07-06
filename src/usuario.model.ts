import { Column, Model, Table } from 'sequelize-typescript';

@Table({ tableName: 'usuario', timestamps: false })
export class Usuario extends Model {
  @Column
  username: string;

  @Column
  password: boolean;
}
