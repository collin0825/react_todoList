import { HashRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
