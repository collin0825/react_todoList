import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // hook
const { VITE_APP_HOST } = import.meta.env;

// 登入
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate(); // 把 hook 取出來做使用

  const handleLogin = async () => {
    const loginData = {
      email: email,
      password: password,
    };

    try {
      const res = await axios.post(`${VITE_APP_HOST}/users/sign_in`, loginData);
      const { token } = res.data;
      console.log(token);
      document.cookie = `token=${token};`;
      navigate("/todoList");
    } catch (error) {
      Swal.fire({
        title: "登入失敗",
        text: error.response.data.message,
        icon: "error",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div id="loginPage" className="bg-yellow">
        <div className="conatiner loginPage vhContainer">
          <div className="side">
            <img
              className="d-m-n"
              src="https://github.com/panduola666/2023_React/blob/master/src/assets/img/left.png?raw=true"
              alt="workImg"
            />
          </div>
          <div className="formControls">
            <h2 className="formControls_txt">最實用的線上代辦事項服務</h2>
            <div className="input-group mb-3">
              <label className="formControls_label" htmlFor="email">
                Email
              </label>
              <input
                type="text"
                id="email"
                className="formControls_input"
                placeholder="請輸入 Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <label className="formControls_label" htmlFor="pwd">
                密碼
              </label>
              <input
                type="password"
                className="formControls_input"
                id="pwd"
                placeholder="請輸入密碼"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="formControls_btnSubmit" onClick={handleLogin}>
              登入
            </button>
            <p
              className="formControls_btnLink"
              onClick={() => {
                navigate("/signUp");
              }}
            >
              註冊帳號
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
