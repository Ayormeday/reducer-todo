import React from "react";
import * as type from "./actionType";

const initialState = {
  todos: [{ item: "Learn about reducers", completed: false, id: 3892987589 }]
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case type.ADD_TODO:
      return {
        ...state,
        todos: action.payload
      };
    //   case SUBMIT:
    //     return {
    //       ...state,
    //       todos: [
    //         ...state.todos,
    //         {
    //           item: state.addItem,
    //           completed: false,
    //           id: Date.now()
    //         }
    //       ],
    //       addItem: ""
    //     };
    case type.MARK_COMPLETE:
      return {
        ...state,
        todos: state.todos.map(item => {
          if (item.id === action.payload) {
            return {
              id: item.id,
              item: item.item,
              completed: !item.completed
            };
          }
          return item;
        })
      };
    //   case CHANGE_INPUT:
    //     return {
    //       ...state,
    //       addItem: action.payload
    //     };
    case type.DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter(item => item.id !== action.payload)
      };
    default:
      return state;
  }
};
