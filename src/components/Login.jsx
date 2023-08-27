import axios from "axios";
import { useState } from "react";
const apiUrl = "https://todolist-api.hexschool.io";

// 登入
function Login({ token, setToken }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(`${apiUrl}/users/sign_in`, loginData);
      setToken(res.data.token);
      setMsg(res.data.token);
      setEmail("");
      setPassword("");
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };

  return (
    <>
      <h2>登入</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          帳號
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="請輸入 Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          密碼
        </span>
        <input
          type="password"
          className="form-control"
          placeholder="請輸入密碼"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-warning" onClick={handleLogin}>
        登入
      </button>
      <span>Token：</span>
      <div
        style={{
          overflow: "auto",
        }}
      >
        {msg}
      </div>
    </>
  );
}

export default Login;
