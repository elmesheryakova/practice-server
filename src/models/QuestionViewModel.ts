export interface QuestionViewModel {
  id: number;
  theme: string;
  question: string;
  answer: string;
  level: 'light' | 'middle' | 'hard';
}
