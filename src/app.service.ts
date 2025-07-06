import { Injectable } from '@nestjs/common';
import { Usuario } from './usuario.model';
import { InjectModel } from '@nestjs/sequelize';
@Injectable()
export class AppService {
  constructor(
    @InjectModel(Usuario)
    private userModel: typeof Usuario,
  ) {}
  getHello() {
    return this.userModel.findAll();
  }
}
