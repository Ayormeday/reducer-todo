import React from "react";


const MARKTODO = 'MARKTODO';

export const initialState = {
    item: 'Learn about reducers',
    completed: false,
    id: 3892987589
  }

export const reducer = (state, action) => {
    switch (action.type) {
      case MARKTODO:
        return 
         
      default:
        return state;
    }
  }


