import React, { useState, useEffect } from "react";
import { getUser } from "../../store/actions/loginAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { Form, Button, Container, Col } from "react-bootstrap";

const Login = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [user, setUser] = useState("");
  const [error, setError] = useState(false);
  const [password, setPassword] = useState("");
  let history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAuth) {
      dispatch(getUser(user));
    }
  }, [dispatch, isAuth, user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === "12345" && user === "admin") {
      setIsAuth(true);
    } else {
      setError(true);
    }
  };
  const handleLogin = (e) => {
    setUser(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (isAuth) {
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("authenticate", JSON.stringify(isAuth));
      history.push("/profile");
    }
  }, [user, isAuth, history]);
  useEffect(() => {
    let storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);
  useEffect(() => {
    let storedAuth = JSON.parse(localStorage.getItem("authenticate"));
    setIsAuth(storedAuth);
  }, []);

  return (
    <Container fluid>
      <Form onSubmit={handleSubmit}>
        <Form.Row className="align-items-center mt-4">
          <Form.Group as={Col} xs="12" sm="auto">
            <Form.Label>Логин</Form.Label>
            <Form.Control
              placeholder="Введите имя"
              id="username"
              type="text"
              name="username"
              onChange={handleLogin}
            />
            <Form.Label>Пароль</Form.Label>
            <Form.Control
              placeholder="Введите пароль"
              id="password"
              type="text"
              name="password"
              onChange={handlePassword}
            />
            {error && (
              <Form.Text className="text-muted">
                Имя пользователя или пароль введены неверно
              </Form.Text>
            )}
          </Form.Group>
        </Form.Row>
        <Button variant="primary" type="submit">
          Войти
        </Button>
      </Form>
    </Container>
  );
};

export default Login;
