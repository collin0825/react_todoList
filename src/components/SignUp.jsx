import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // hook
const { VITE_APP_HOST } = import.meta.env;

// 註冊
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");

  const navigate = useNavigate(); // 把 hook 取出來做使用

  const handleSignUp = async () => {
    if (!email || !password || !nickname) {
      alert("請填寫正確的註冊資訊");
      return;
    }
    const signUpData = {
      email,
      password,
      nickname,
    };
    try {
      const res = await axios.post(
        `${VITE_APP_HOST}/users/sign_up`,
        signUpData
      );
      Swal.fire({
        title: "註冊成功",
        icon: "success",
        showConfirmButton: false,
        timer: 1500,
      });
      navigate("/");
    } catch (error) {
      alert(error.response.data.message);
    }
  };
  return (
    <>
      <div id="signUpPage" className="bg-yellow">
        <div className="conatiner signUpPage vhContainer">
          <div className="side">
            <img
              className="d-m-n"
              src="https://github.com/panduola666/2023_React/blob/master/src/assets/img/left.png?raw=true"
              alt="workImg"
            />
          </div>
          <div className="formControls">
            <h2 className="formControls_txt">註冊帳號</h2>
            <div className="input-group mb-3">
              <label className="formControls_label" htmlFor="email">
                Email
              </label>
              <input
                className="formControls_input"
                type="text"
                id="email"
                placeholder="請輸入 Email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <label className="formControls_label" htmlFor="name">
                您的暱稱
              </label>
              <input
                className="formControls_input"
                type="text"
                id="name"
                placeholder="請輸入暱稱"
                value={nickname}
                onChange={(e) => {
                  setNickname(e.target.value);
                }}
              />
            </div>
            <div className="input-group mb-3">
              <label className="formControls_label" htmlFor="pwd">
                密碼
              </label>
              <input
                className="formControls_input"
                type="password"
                id="pwd"
                placeholder="請輸入密碼"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button className="formControls_btnSubmit" onClick={handleSignUp}>
              註冊
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignUp;
