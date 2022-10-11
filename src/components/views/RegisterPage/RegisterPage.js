import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../actions/user_action";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (e) => setEmail(e.currentTarget.value);
  const onNameHandler = (e) => setName(e.currentTarget.value);
  const onPasswordHandler = (e) => setPassword(e.currentTarget.value);
  const onConfirmPasswordHandler = (e) =>
    setConfirmPassword(e.currentTarget.value);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword)
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");

    let body = {
      email: email,
      name: name,
      password: password,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Fail to sign up");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <form
        onSubmit={onSubmitHandler}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <label>Email</label>
        <input type="email" value={email} onChange={onEmailHandler} />

        <label>Name</label>
        <input type="text" value={name} onChange={onNameHandler} />

        <label>Password</label>
        <input type="password" value={password} onChange={onPasswordHandler} />

        <label>Confirm Password</label>
        <input
          type="password"
          value={confirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <button>회원 가입</button>
      </form>
    </div>
  );
}

export default RegisterPage;
