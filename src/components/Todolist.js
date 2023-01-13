import React,{useState} from 'react';
import Todo from './Todo';
import TodoForm  from './TodoForm';



const Todolist = () => {

    const [todos,setTodos] = useState([]);

    //add Todo
    const addTodo = todo => {

        if(!todo.text || /^\s*$/.test(todo.text)){
            return ;
        }
        const newTodos = [todo, ...todos];
         setTodos(newTodos);
    };


    //update todo
     
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
          return;
        }
    
        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
      };


    //remove todo
        const removeTodo = id => {
            const removeArr = [...todos].filter(todo => todo.id !== id)
            setTodos(removeArr);
        }




        const completeTodo = id => {
            let updateTodos = todos.map(todo => {
                if(todo.id === id) {
                    todo.isComplete = !todo.isComplete
                }

                return todo
            })
            setTodos(updateTodos);    
        };

    return (
        <div>
           <h1>What's the plan for Today ?</h1>
           <TodoForm onSubmit = {addTodo}/> 
           <Todo todos = {todos} completeTodo = {completeTodo} removeTodo={removeTodo}
           updateTodo = {updateTodo}
           />
        </div>
    );
};




export default Todolist;
