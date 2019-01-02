import 'reflect-metadata';
import {createConnection} from 'typeorm';
import { Instructor } from './entity/Instructor';
import { Student } from './entity/Student';
import { Course } from './entity/Course';
import { Question } from './entity/Question';

createConnection().then(async connection => {
    // CREATING AN INSTRUCTOR
    const instructor = new Instructor();
    instructor.instructorName = 'Dr. Sandra Lewis';
    instructor.instructorEmail = 'slewis@fsu.edu';
    instructor.instructorPassword = 'braille';
    const instructorRepository = connection.getRepository(Instructor);
    await instructorRepository.save(instructor);

    // CREATING A COURSE
    const course = new Course();
    course.className = 'Grade 1 Braille';
    course.instructor = instructor;
    course.questions = [];
    const courseRepository = connection.getRepository(Course);
    const savedCourse = await courseRepository.save(course);

    // CREATING A QUESTION
    const question = new Question();
    question.question = 'Which letter is pictured below?';
    question.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Braille_A1.svg/80px-Braille_A1.svg.png';
    question.A = 'Letter B';
    question.B = 'Letter A';
    question.C = 'Letter J';
    question.D = 'Letter D';
    question.answer = 'B';
    question.course = savedCourse;
    const questionRepository = connection.getRepository(Question);
    const savedQuestion = await questionRepository.save(question);

    // CREATING A STUDENT
    const student = new Student();
    student.studentName = 'Chelsea Tompkins';
    student.studentEmail = 'cnoelle1091@gmail.com';
    student.studentPassword = '';
    student.passwordHash = '';
    student.course = savedCourse;
    student.currentQuestion = savedQuestion;
    const studentRepository = connection.getRepository(Student);
    await studentRepository.save(student);
});

// .catch(error => console.log(error));
