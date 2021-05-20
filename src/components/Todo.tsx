import { createState } from "solid-js";
import Input from "./Input";

export enum Status {
  Started = "started",
  Completed = "completed",
  Active = "active"
}

const Todo = () => {
  const [state, setState] = createState({
    todos: [
      {
        id: 1,
        title: "Garden Work",
        status: Status.Active
      },
      {
        id: 2,
        title: "Work out",
        status: Status.Completed
      },
    ]
  })

  return (
    <div class="App">
       <h1>Todo</h1>
       <Input />
    </div>
  );
}

export default Todo;