import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn} from 'typeorm';
import {Course} from './Course';

@Entity()
export class Question {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('text')
    question: string;

    @Column('text')
    img: string;

    @Column('varchar')
    A: string;

    @Column('varchar')
    B: string;

    @Column('varchar')
    C: string;

    @Column('varchar')
    D: string;

    @Column('varchar')
    answer: string;

    @ManyToOne(type => Course, course => course.questions)
    course: Course;
}