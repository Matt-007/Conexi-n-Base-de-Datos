import { Injectable } from '@nestjs/common';
import { CreateJuegoDto } from './dto/create-juego.dto';
import { UpdateJuegoDto } from './dto/update-juego.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { JuegoEntity } from './entities/juego.entity';
import { Repository } from 'typeorm';
@Injectable()
export class JuegosService {
  constructor(

    @InjectRepository(JuegoEntity)

    private readonly JuegoRepository: Repository<JuegoEntity>,

  ) { }

  async create(createJuego: CreateJuegoDto) {

    const juego = this.JuegoRepository.create(createJuego);

    await this.JuegoRepository.save(juego);

    return juego;

  }
  ccreate(createJuegoDto: CreateJuegoDto) {
    return 'This action adds a new album';
  }

  async findOne(id:string) {
    const juego = await this.JuegoRepository.findOne({ where: {id} });

    return juego;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} juego`;
  // }

  update(id: number, updateJuegoDto: UpdateJuegoDto) {
    return `This action updates a #${id} album`;
  }


  async delete(id: string) {
    let juego = await this.findOne(id);
    if (juego) {
      const jugador = this.JuegoRepository.delete({ id }); 
      return "OK";
    } else {
      return "No existe";
    }
  }
}