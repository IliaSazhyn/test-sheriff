import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { Navbar, Nav, Row, Col } from "react-bootstrap";

const Header = () => {
  const store = useSelector((state) => state.user);

  let history = useHistory();

  function handleClick() {
    if (store.isAuthenticate) {
      history.push("/profile");
    } else {
      history.push("/login");
    }
  }

  return (
    <Row>
      <Col>
        <Navbar bg="dark" variant="dark">
          <Nav className="mr-auto">
            <Nav.Link href="/">На главную</Nav.Link>
            <Nav.Link href="/news">Новости</Nav.Link>
            <Nav.Link onClick={handleClick}>Профиль</Nav.Link>
          </Nav>
        </Navbar>
      </Col>
    </Row>
  );
};

export default Header;
