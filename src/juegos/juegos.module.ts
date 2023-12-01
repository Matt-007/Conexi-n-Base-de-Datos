import { Module } from '@nestjs/common';
import { JuegosService } from './juegos.service';
import { JuegosController } from './juegos.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { JuegoEntity} from './entities/juego.entity';

@Module({
  controllers: [JuegosController],
  providers: [JuegosService],
  imports: [TypeOrmModule.forFeature([JuegoEntity])]
})
export class JuegosModule {}
