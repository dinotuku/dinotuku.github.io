import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';

const Contact = () => (
  <section className="hero contact">
    <section className="full-height two-third bg-white">
      <Container className="bg-white">
        <Row>
          <Col>
            <Jumbotron className="bg-white">
              <h1 className="display-4"><strong>404</strong></h1>
              <div className="my-3">
                <p className="lead">PAGE NOT FOUND :(</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Contact;
