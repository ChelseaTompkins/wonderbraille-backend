import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity()
export class Instructor {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    instructorName: string;

    @Column("varchar")
    instructorEmail: string;

    @Column("varchar")
    instructorPassword: string;

}
