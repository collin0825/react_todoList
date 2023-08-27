import axios from "axios";
import { useState } from "react";
const apiUrl = "https://todolist-api.hexschool.io";

// 註冊
function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nickname, setNickname] = useState("");
  const [msg, setMsg] = useState("");

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
      const res = await axios.post(`${apiUrl}/users/sign_up`, signUpData);
      setMsg("註冊成功");
      setEmail("");
      setPassword("");
      setNickname("");
    } catch (error) {
      setMsg(error.response.data.message);
    }
  };
  return (
    <>
      <h2>註冊</h2>
      <div className="input-group mb-3">
        <span className="input-group-text">帳號</span>
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
        <span className="input-group-text">密碼</span>
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
      <div className="input-group mb-3">
        <span className="input-group-text">暱稱</span>
        <input
          type="text"
          className="form-control"
          placeholder="請輸入暱稱"
          value={nickname}
          onChange={(e) => {
            setNickname(e.target.value);
          }}
        />
      </div>
      <button className="btn btn-warning" onClick={handleSignUp}>
        註冊
      </button>
      <span>註冊訊息：{msg}</span>
    </>
  );
}

export default SignUp;
