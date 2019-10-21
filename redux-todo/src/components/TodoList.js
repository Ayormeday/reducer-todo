import React, { Component } from "react";
import { connect } from 'react-redux';
import { addTodoItem, toggleComplete, deleteItem } from '../state/actionCreators';
import Todo from './Todo';



class TodoList extends Component {
    
    valueRef= React.createRef();

    handleSubmit = () => {
        this.props.addTodoItem(this.valueRef.current.value);
        this.valueRef.current.value = '';
    };
    render(){
        return (
            <div>
                <ul>
                    {this.props.todos.map(item => (
                    <Todo
                        key={item.key}
                        item={item}
                        toggleComplete={this.props.toggleComplete}
                    />
                    ))} 
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <input
                    name="todo"
                    ref= {this.valueRef}
                    // value={todo}
                    // onChange={todoOnChange}
                    placeholder="enter task"
                    ></input>
                    <button type="submit">add</button>
                    {/* <button onClick={deleteItem} type="button">
                     Delete
                    </button> */}
                </form>
            </div>
        );
      }
    }


  const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
  }

  export default connect(
      mapStateToProps, 
      { addTodoItem, toggleComplete, deleteItem }
      )(TodoList)

    //   export default connect(mapStateToProps, actionCreators)(TodoList)