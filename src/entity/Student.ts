import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from "typeorm";
import {Course} from './Course';

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    studentName: string;

    @Column('varchar')
    studentEmail: string;

    @Column('varchar')
    studentPassword: string;

    @ManyToOne(type => Course)
    @JoinColumn()
    course: Course;

}