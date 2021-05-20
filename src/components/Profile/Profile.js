import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import { clearUser } from "../../store/actions/loginAction";
const Profile = () => {
  const store = useSelector((state) => state.user);

  const dispatch = useDispatch();
  let history = useHistory();

  const onLogout = () => {
    dispatch(clearUser());
    localStorage.clear();
    history.push("/");
  };

  return (
    <Container fluid>
      <Row>
        <Col className="text-center mt-5">
          <h5>Профиль</h5>
          <p>Пользователь: {store.user}</p>
          <Button variant="primary" onClick={onLogout}>
            Выход
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
