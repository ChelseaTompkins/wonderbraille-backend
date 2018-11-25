import { Test, TestingModule } from '@nestjs/testing';
import { QuestionsController } from './questions.controller';

describe('Questions Controller', () => {
  let module: TestingModule;

  beforeAll(async () => {
    module = await Test.createTestingModule({
      controllers: [QuestionsController],
    }).compile();
  });
  it('should be defined', () => {
    const controller: QuestionsController = module.get<QuestionsController>(QuestionsController);
    expect(controller).toBeDefined();
  });
});
