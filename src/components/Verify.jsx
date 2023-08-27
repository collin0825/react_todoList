import axios from "axios";
import { useState } from "react";
const apiUrl = "https://todolist-api.hexschool.io";

// 驗證
function Verify() {
  const [token, setToken] = useState("");
  const [msg, setMsg] = useState("");
  const handleVerify = async () => {
    try {
      const res = await axios.get(`${apiUrl}/users/checkout`, {
        headers: {
          Authorization: token,
        },
      });
      setMsg("token驗證成功");
      setToken("");
    } catch (error) {
      setMsg(error.response.data.message);
      setToken("");
    }
  };
  return (
    <>
      <h2>驗證</h2>
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
      <button className="btn btn-warning" onClick={handleVerify}>
        驗證
      </button>
      <span>驗證結果：{msg}</span>
    </>
  );
}

export default Verify;
