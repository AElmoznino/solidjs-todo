import './App.css';
import { lazy } from "solid-js";
import {  Route, Link } from "solid-app-router";

export const routes = [
  {
    path: "/todos",
    component: lazy(() => import("./pages/todos"))
  },
  {
    path: "/",
    component: lazy(() => import("./pages/index"))
  }

];

function App() {
  return (
    <>
      <h1>Awesome Site</h1>
      <Link class="nav" href="/">
        Home
      </Link>
      <Link class="nav" href="/todos">
        Todos page
      </Link>
      <Route />
    </>
  );
}


export default App;
