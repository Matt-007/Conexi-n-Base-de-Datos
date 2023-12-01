export {Entity} from "typeorm"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class JuegoEntity {
    @PrimaryGeneratedColumn('increment')
    id:string;
    @Column('varchar', {
        name: 'numero',
        nullable: false,
        comment: 'id del juego'
    })
    numero: string

    @Column('varchar', {
        name: 'nombre',
        nullable: false,
        comment: 'nombre del juego'
    })
    nombre: string

    @Column('varchar', {
        name: 'tipo_juego',
        nullable: false,
        comment: 'tipo de juego'
    })
    tipo_juego: string

    @Column('int', {
        name: 'fecha_lanzamiento',
        nullable: false,
        comment: 'fecha de lanzamiento del juego'
    })
    fecha_lanzamiento: number
}

