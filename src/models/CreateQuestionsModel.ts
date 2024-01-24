export interface CreateQuestionsModel {
  theme: string;
  question: string;
  answer: string;
  level: 'light' | 'middle' | 'hard';
}
