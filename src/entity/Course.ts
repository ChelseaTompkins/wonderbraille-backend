import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn} from "typeorm";
import {Instructor} from './Instructor';

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column("varchar")
    className: string;

    @OneToOne(type => Course)
    @JoinColumn()
    instructor: Instructor

}