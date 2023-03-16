import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "nguyenhau230699@gmail.com",
      password: "Dinhhau230699",
    };
  }

  setPragrams = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };
  login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      UserName: this.state.username,
      Password: this.state.password,
    });

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };
    fetch(
      "http://api.ezcap.vn/user/authenticate?nguyenhau230699@gmail.com=Dinhhau230699",
      requestOptions
    )
      .then((response) => {
        console.log(response);
        if (response.ok) {
          return response.json();
        }
        throw Error(response.status);
      })
      .then((result) => {
        console.log(result);
        localStorage.setItem("accessToken", result.accessToken);
        alert("Đăng nhập thành công");
      })
      .catch((error) => {
        console.log("error", error);
        alert("Đăng nhập không thành công");
      });
  };
  render() {
    return (
      <form className="Login">
        <Link to="/home">Quay lại</Link>
        <h1>Đăng nhập</h1>
        <p>Vui lòng nhập đúng thông tin tài khoản để đăng nhập</p>
        <div className="Email">
          <label>Email</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Nhập email"
            onChange={this.setPragrams}
          />
        </div>
        <div className="pass">
          <label>Mật Khẩu</label>
          <br />
          <input
            type="Password"
            name="Password"
            placeholder="Nhập mật khẩu..."
            onChange={this.setPragrams}
          />
        </div>
        <div>
          <button type="button" onClick={this.login}>
            Đăng nhập
          </button>
        </div>
      </form>
    );
  }
}
