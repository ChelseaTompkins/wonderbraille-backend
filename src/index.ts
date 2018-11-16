import "reflect-metadata";
import {createConnection} from "typeorm";
import { Instructor } from "./entity/Instructor";
import { Student } from "./entity/Student";
import { Course } from "./entity/Course";
import { Question } from "./entity/Question";


createConnection().then(async connection => {
    //CREATING AN INSTRUCTOR
    const instructor = new Instructor();
    instructor.instructorName = "Dr. Sandra Lewis";
    instructor.instructorEmail = "slewis@fsu.edu";
    instructor.instructorPassword = "braille";


    //CREATING A COURSE
    const course = new Course();
    course.className= "Grade 1 Braille";
    course.instructor = instructor;


    //CREATING A STUDENT
    const student = new Student();
    student.studentName = "Chelsea Tompkins";
    student.studentEmail = "cnoelle1091@gmail.com";
    student.studentPassword = "braille";
    student.course = course;


    //CREATING A QUESTION
    const question = new Question();
    question.question = "What color is the sky?";
    question.A = "blue";
    question.B = "red";
    question.C = "green";
    question.D = "purple";
    question.answer = "blue";
    question.course = course;

    let instructorRepository = connection.getRepository(Instructor);
    let courseRepository = connection.getRepository(Course);
    let studentRepository = connection.getRepository(Student);
    let questionRepository = connection.getRepository(Question)
    await instructorRepository.save(instructor);
    await courseRepository.save(course);
    await studentRepository.save(student);
    await questionRepository.save(question);
}).catch(error => console.log(error));

