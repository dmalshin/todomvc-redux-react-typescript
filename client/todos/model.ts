export type Todo = {
  id?: number;
  text: string;
  completed: boolean;
};

export type IState = Todo[];

export const initialState = {
  todos: [
    {
      id: 0,
      completed: false,
      text: 'Use TypeScript'
    },
    {
      id: 1,
      completed: false,
      text: 'Use React'
    },
    {
      id: 2,
      completed: false,
      text: 'Use Redux'
    },
    {
      id: 3,
      completed: false,
      text: 'Use JavaScript'
    },
    {
      id: 4,
      completed: false,
      text: 'Use patterns'
    },
    {
      id: 5,
      completed: false,
      text: 'Don\'t use antipatterns'
    },
    {
      id: 6,
      completed: false,
      text: 'Don\'t use antipatterns. Seriously.'
    }
  ],
};
