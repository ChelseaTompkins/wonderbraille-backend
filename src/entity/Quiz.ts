// import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
// import { Course } from './Course';
// import { Question } from './Question';

// @Entity()
// export class Quiz {

//     @PrimaryGeneratedColumn()
//     id: number;

//     @Column('varchar')
//     quiz: string;

//     @OneToMany(type => Question, question => question.quiz)
//     questions: Question[];

//     @ManyToOne(type => Course, course => course.id)
//     course: Course;
// }