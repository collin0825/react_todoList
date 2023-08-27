import axios from "axios";
import { useEffect, useState } from "react";
const apiUrl = "https://todolist-api.hexschool.io";

// todolist
function TodoList({ token }) {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    getTodos();
  }, [token]);

  const getTodos = async () => {
    try {
      const res = await axios.get(`${apiUrl}/todos`, {
        headers: {
          Authorization: token,
        },
      });
      setTodos(res.data.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  const addTodo = async () => {
    if (!newTodo) {
      alert("請輸入待辦");
      return;
    }
    try {
      const res = await axios.post(
        `${apiUrl}/todos`,
        {
          content: newTodo,
        },
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setNewTodo("");
      getTodos();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const completeTodo = async (id) => {
    try {
      const res = await axios.patch(
        `${apiUrl}/todos/${id}/toggle`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      getTodos();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const deleteTodo = async (id) => {
    try {
      const res = await axios.delete(`${apiUrl}/todos/${id}`, {
        headers: {
          Authorization: token,
        },
      });
      getTodos();
    } catch (error) {
      console.log(error.response.data.message);
    }
  };
  return (
    <>
      <h2 style={{ display: token ? "none" : "block" }}>
        請先登入才能編輯代辦清單唷！
      </h2>
      <div style={{ display: token ? "block" : "none" }}>
        <h2>Todo List</h2>
        <div className="d-flex justify-content-center align-item-center mb-4">
          <input
            type="text"
            className="form-control me-2 w-75"
            placeholder="請輸入代辦事項"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button
            type="button"
            className="btn btn-sm-warning"
            onClick={addTodo}
          >
            新增
          </button>
        </div>
        <ul>
          {todos.map((todo) => {
            return (
              <li
                className="d-flex justify-content-between mb-2 fw-bold"
                key={todo.id}
              >
                <span
                  style={{
                    textDecoration: todo.status ? "line-through" : "none",
                  }}
                >
                  {todo.content} {todo.status ? "[已完成]" : "[未完成]"}
                </span>
                <div className="d-flex">
                  <button
                    type="button"
                    className="btn btn-sm-warning me-2"
                    onClick={() => completeTodo(todo.id)}
                  >
                    切換
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm-warning"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    刪除
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default TodoList;
