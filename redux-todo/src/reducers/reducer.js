import React from "react";


const MARKTODO = 'MARKTODO';

const initialTodo = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

const reducer = (todos, action) => {
  switch (action.type) {
    case MARKTODO:
      return;

    default:
      return todos;
  }
}

export const [initialTodo, reducer]
