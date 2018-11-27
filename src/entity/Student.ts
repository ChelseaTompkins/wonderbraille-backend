import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import { Course } from './Course';
import { Question } from './Question';

@Entity()
export class Student {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    studentName: string;

    @Column('varchar')
    studentEmail: string;

    @Column({length: 100, nullable: true})
    studentPassword: string | undefined;

    @Column({ length: 100, nullable: true })
    passwordHash: string|undefined;

    @ManyToOne(type => Course)
    @JoinColumn()
    course: Course;

    @ManyToOne(type => Question)
    currentQuestion: Question;
}