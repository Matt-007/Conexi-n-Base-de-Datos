import { IsDateString, IsNumber, IsOptional, IsPositive, IsString } from "class-validator";

export class CreateJuegoDto {
    @IsString()
    id: string;
    @IsString()
    nombre:string;
    @IsOptional()
    tipo_juego:string;
    @IsNumber()
    fecha_lanzamiento:number;
    @IsPositive ()
    numero_ventas:number;
}

