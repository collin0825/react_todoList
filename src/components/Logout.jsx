import axios from "axios";
import { useState } from "react";
const apiUrl = "https://todolist-api.hexschool.io";

// 登出
function Logout({ token, setToken }) {
  const [msg, setMsg] = useState("");
  const handleLogout = async () => {
    try {
      const res = await axios.post(
        `${apiUrl}/users/sign_out`,
        {},
        {
          headers: {
            Authorization: token,
          },
        }
      );
      setMsg(res.data.message);
      setToken("");
    } catch (error) {
      setMsg(error.response.data.message);
      setToken("");
    }
  };
  return (
    <>
      <h2>登出</h2>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">
          Token
        </span>
        <input
          type="text"
          className="form-control"
          placeholder="請輸入 Token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
      </div>
      <button className="btn btn-warning" onClick={handleLogout}>
        登出
      </button>
      <span>登出訊息：{msg}</span>
    </>
  );
}

export default Logout;
