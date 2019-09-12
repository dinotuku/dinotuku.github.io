import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

const Contact = () => (
  <section className="hero contact">
    <section className="full-height two-third bg-white">
      <Container className="bg-white">
        <Row>
          <Col>
            <Jumbotron className="bg-white">
              <h1 className="display-4"><strong>Contact</strong></h1>
              <div className="my-3">
                <p className="lead">Personal Email</p>
                <hr className="my-2" />
                <Button color="link" size="lg" block><a href="mailto:dinotuku@gmail.com">dinotuku@gmail.com</a></Button>
              </div>
              <div className="my-3">
                <p className="lead">School Email</p>
                <hr className="my-2" />
                <Button color="link" size="lg" block><a href="mailto:kuan.tung@epfl.ch">kuan.tung@epfl.ch</a></Button>
              </div>
              <p className="mb-3">
                <Button color="link mx-2"><a href="https://github.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></Button>
                <Button color="link mx-2"><a href="https://www.linkedin.com/in/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a></Button>
                <Button color="link mx-2"><a href="https://www.facebook.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg"></i></a></Button>
                <Button color="link mx-2"><a href="https://www.instagram.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></Button>
              </p>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Contact;
