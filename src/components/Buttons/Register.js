import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
export default class Register extends React.Component {
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
  render() {
    return (
      <form className="Register">
        <Link to="/home">Quay lại</Link>
        <h1>Đăng ký</h1>
        <p>Vui lòng nhập đúng thông tin cá nhân để đăng ký</p>
        <div className="Name">
          <label>Họ tên đầy đủ</label>
          <br />
          <input
            type="text"
            name="username"
            placeholder="Nhập họ tên đầy đủ"
            onChange={this.setPragrams}
          />
        </div>
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
        <div className="Enterthepassword">
          <label>Xác nhận mật khẩu</label>
          <br />
          <input
            type="Password"
            name="Password"
            placeholder="xác nhận mật khẩu..."
            onChange={this.setPragrams}
          />
        </div>
        <div>
          <button type="button" onClick={this.login}>
            Đăng Ký
          </button>
        </div>
      </form>
    );
  }
}
