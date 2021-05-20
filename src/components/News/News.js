import React, { useEffect } from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import { getNews } from "../../store/actions/newsAction";
import { useDispatch, useSelector } from "react-redux";

const News = () => {
  const { news } = useSelector((state) => state.news);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row>
        <Col className="text-center mt-5">
          <Card>
            {news.map((item) => (
              <React.Fragment key={item.id}>
                <Card.Header as="h5">{item.title}</Card.Header>
                <Card.Body>
                  <Card.Text>{item.body}</Card.Text>
                </Card.Body>
              </React.Fragment>
            ))}
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default News;
