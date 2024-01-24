export type QuestionType = {
  id: number;
  question: string;
  answer: string;
  level: 'light' | 'middle' | 'hard';
};

export type ThemeType = {
  id: number;
  theme: string;
  questions: QuestionType[];
};

export const db: { senior: ThemeType[] } = {
  senior: [
    {
      id: 1,
      theme: 'Основные принципы и языки разработки',
      questions: [
        {
          id: 1,
          question: 'Что такое Solid?',
          answer: 'ответ1',
          level: 'light',
        },
        {
          id: 2,
          question: 'Какие принципы SOLID вы считаете наиболее важными в контексте фронтенд-разработки, и как вы их применяли в своих проектах?',
          answer: 'ответ2',
          level: 'middle',
        }
      ],
    },
    {
      id: 2,
      theme: 'Фронтенд-разработка и технологии',
      questions: [
        {
          id: 1,
          question: 'Каковы основные различия между SPA и SSR',
          answer: 'ответ1',
          level: 'light',
        }
      ],
    },
  ],
};
