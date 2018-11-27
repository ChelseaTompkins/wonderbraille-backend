import { Test, TestingModule } from '@nestjs/testing';
import { QuizzesController } from './quizzes.controller';

describe('Quizzes Controller', () => {
  let module: TestingModule;
  
  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [QuizzesController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: QuizzesController = module.get<QuizzesController>(QuizzesController);
    expect(controller).toBeDefined();
  });
});
