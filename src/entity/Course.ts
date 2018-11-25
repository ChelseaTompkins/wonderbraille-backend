import {Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany} from 'typeorm';
import {Instructor} from './Instructor';
import { Question } from './Question';

@Entity()
export class Course {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    className: string;

    @OneToOne(type => Course)
    @JoinColumn()
    instructor: Instructor;

    @OneToMany(type => Question, question => question.course)
    questions: Question[];
}