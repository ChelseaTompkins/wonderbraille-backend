import { Test, TestingModule } from '@nestjs/testing';
import { CoursesController } from './courses.controller';

describe('Courses Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [CoursesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: CoursesController = module.get<CoursesController>(CoursesController);
    expect(controller).toBeDefined();
  });
});
