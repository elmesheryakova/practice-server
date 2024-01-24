export interface UpdateQuestionModel {
  theme: string;
  question: string;
  answer: string;
  level: 'light' | 'middle' | 'hard';
}
