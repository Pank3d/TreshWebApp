import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SignIn from "./SignIn";

const SignUp = () => {
  const navigation = () => {
    navigate('/')
  }
  const navigate  = useNavigate()
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [emailDrt, setEmailDrt] = useState<boolean>(false);
  const [passwordDrt, setPasswordDrt] = useState<boolean>(false);
  const [usernameDrt, setUsernameDrt] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>(
    " Емейл не может быть пустым"
  );
  const [passwordError, setPasswordError] = useState<string>(
    " Пароль не может быть пустым"
  );
  const [usernameError, setUsernameError] = useState<string>(
    " Имя пользователя не может быть пустым"
  );
  const [formValid, setFormValid] = useState<boolean>(false);

  useEffect(() => {
    if (emailError || passwordError || usernameError) {
      setFormValid(false);
    } else {
      setFormValid(true);
    }
  }, [emailError, usernameError, passwordError]);

  const emailHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError("Некорректный емейл");
    } else {
      setEmailError("");
    }
  };

  const passwordHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (e.target.value.length <= 8) {
      setPasswordError("Пароль должен быть больше или равен 8");
    } else {
      setPasswordError("");
    }
  };

  const usernameHendler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
    if (e.target.value.length < 3) {
      setUsernameError("Имя пользователя не может содержать менее 3 символов");
    } else {
      setUsernameError("");
    }
  };

  const blurHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    switch (e.target.name) {
      case "email":
        setEmailDrt(true);
        break;
      case "username":
        setUsernameDrt(true);
        break;
      case "password":
        setPasswordDrt(true);
        break;
    }
  };
  return (
    <div className="wrapper-for-form">
      <form className="formRegist">
        <h1 className="h1Registr">Регистрация</h1>
        {usernameDrt && usernameError && (
          <div style={{ color: "red" }}>{usernameError}</div>
        )}
        <input
          onChange={(e) => usernameHendler(e)}
          value={username}
          onBlur={(e) => blurHandler(e)}
          className="nameInp"
          type="text"
          name="username"
          placeholder="Введите имя пользователя"
        />
        {emailDrt && emailError && (
          <div style={{ color: "red" }}>{emailError}</div>
        )}
        <input
          onChange={(e) => emailHendler(e)}
          value={email}
          onBlur={(e) => blurHandler(e)}
          className="emailInp"
          type="text"
          name="email"
          placeholder="Введите ваш эмейл"
        />
        {passwordDrt && passwordError && (
          <div style={{ color: "red" }}>{passwordError}</div>
        )}
        <input
          onChange={(e) => passwordHendler(e)}
          value={password}
          onBlur={(e) => blurHandler(e)}
          className="passInp"
          type="password"
          name="password"
          placeholder="Введите пароль "
        />
        <button  onClick = {navigation} disabled={!formValid} className="subBtn" type="submit">
          Регистрация
        </button>
        <Link className="link-style" to="/sign-in"> Уже есть аккаунт ?</Link>
      </form>
    </div>
  );
};

export default SignUp;
