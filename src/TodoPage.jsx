import { useState } from "react";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Verify from "./components/Verify";
import Logout from "./components/Logout";
import TodoList from "./components/TodoList";

function TodoPage() {
  const [token, setToken] = useState("");
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-6">
          <SignUp />
          <hr />
          <Login token={token} setToken={setToken} />
          <hr />
          <Verify />
          <hr />
          <Logout token={token} setToken={setToken} />
        </div>
        <div className="col-6 todolist">
          <TodoList token={token} />
        </div>
      </div>
    </div>
  );
}
export default TodoPage;
