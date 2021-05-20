import { createState } from "solid-js";
import Input from "./Input";
import { uuid } from '../utils'

export enum Status {
  Started = "started",
  Completed = "completed",
  Active = "active"
}

const Todo = () => {
  const [state, setState] = createState({
    todos: [
      {
        id: 'foo',
        title: "Garden Work",
        status: Status.Active
      },
      {
        id: 'bar',
        title: "Work out",
        status: Status.Completed
      },
    ]
  });

  const handleInput = (v: string) => {
    setState('todos', t => [...t, {id: uuid(), title: v, status: Status.Active }]);
  }

  return (
    <div class="App">
       <h1>Todo</h1>
       <Input  handleSubmit={v => handleInput(v)}/>
       <pre>{JSON.stringify(state.todos, null, 2)}</pre>
       {todos.map(todo => <TodoItem todo={todo} />)}
    </div>
  );
}

export default Todo;