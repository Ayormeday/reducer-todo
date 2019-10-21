import React from "react";
import TodoList from './components/TodoList';
// const ADD_TODO = "ADD_TODO";
// const CHANGE_INPUT = "CHANGE_INPUT";
// const MARK_COMPLETE = "MARK_COMPLETE";
// const CLEAR_COMPLETE = "CLEAR_COMPLETE";
// const SUBMIT = "SUBMIT";

// const initialState = {
//   todos: [{ item: "Learn about reducers", completed: false, id: 3892987589 }],
//   addItem: ""
// };

// const reducer = (state, action) => {
//   switch (action.type) {
//     case ADD_TODO:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             item: state.addItem,
//             completed: false,
//             id: new Date()
//           }
//         ],
//         addItem: ""
//       };
//     case SUBMIT:
//       return {
//         ...state,
//         todos: [
//           ...state.todos,
//           {
//             item: state.addItem,
//             completed: false,
//             id: Date.now()
//           }
//         ],
//         addItem: ""
//       };
//     case MARK_COMPLETE:
//       return {
//         ...state,
//         todos: state.todos.map(item => {
//           if (action.payload === item.id) {
//             return {
//               id: item.id,
//               item: item.item,
//               completed: !item.completed
//             };
//           }
//           return item;
//         })
//       };
//     case CHANGE_INPUT:
//       return {
//         ...state,
//         addItem: action.payload
//       };
//     case CLEAR_COMPLETE:
//       return {
//         ...state,
//         todos: state.todos.filter(item => {
//           return !item.completed;
//         })
//       };
//     default:
//       return state;
//   }
// };



export default function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  // const addTodoItem = e => {
  //   e.preventDefault();
  //   dispatch({ type: ADD_TODO });
  // };

  // const todoOnChange = event => {
  //   dispatch({
  //     type: CHANGE_INPUT,
  //     payload: event.target.value
  //   });
  // };

  // const deleteItem = () => {
  //   dispatch({
  //     type: CLEAR_COMPLETE
  //   });
  // };

  // const toggleComplete = id => event => {
  //   dispatch({ type: MARK_COMPLETE, payload: id });
  // };

  return (
    <div className="todoListMain">
      {/* <TodoForm
        addTodoItem={addTodoItem}
        deleteItem={deleteItem}
        todo={state.addItem}
        todoOnChange={todoOnChange}
      /> */}
      <TodoList  />
    </div>
  );
}

// function Todo(props) {
//   return (
//     <li onClick={props.toggleComplete(props.item.id)}>{props.item.item}{props.item.completed ? ' - Complete' : ' - Not Complete'}</li>
//   );
// }

// function TodoList(props) {
//   return (
//     <ul>
//       {props.items.map(item => (
//         <Todo
//           key={item.key}
//           item={item}
//           toggleComplete={props.toggleComplete}
//         />
//       ))}
//     </ul>
//   );
// }

// function TodoForm(props) {
//   const { addTodoItem, deleteItem, todo, todoOnChange } = props;
//   return (
//     <div className="header">
//       <form onSubmit={addTodoItem}>
//         <input
//           name="todo"
//           value={todo}
//           onChange={todoOnChange}
//           placeholder="enter task"
//         ></input>
//         <button type="submit">add</button>
//         <button onClick={deleteItem} type="button">
//           Delete
//         </button>
//       </form>
//     </div>
//   );
// }
