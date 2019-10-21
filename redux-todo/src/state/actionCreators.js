import * as type from "./actionType";
import uuid from 'uuid';

export const addTodoItem = item => {
  return { 
      type: type.ADD_TODO,
    payload: { item, id:uuid(), completed: false}
};
};

// export const todoOnChange = event => {
//   return {
//     type: type.CHANGE_INPUT,
//     payload: event.target.value
//   };
// };

export const deleteItem = (id) => {
  return {
    type: type.DELETE_TODO,
    payload: id
  };
};

export const toggleComplete = id => event => {
  return { type: type.MARK_COMPLETE, payload: id };
};
