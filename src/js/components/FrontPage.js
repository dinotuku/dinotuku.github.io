import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'reactstrap';

import profile from '../../img/profile.jpg';

const FrontPage = () => (
  <section id="front-page" className="hero full-height bg-white">
    <Container className="bg-white">
      <Row>
        <Col>
          <Jumbotron className="bg-white two-third">
            <img src={profile} className="profile my-3" alt="profile"/>
            <h1 className="display-4"><strong>Kuan Tung</strong></h1>
            <p className="lead">Senior at National Taiwan University</p>
            <hr className="my-2" />
            <p>{'<3'} machine learning, web development, motion design, music and video editing.</p>
            <p className="mb-3">
              <Button color="link mx-2"><a href="https://github.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.linkedin.com/in/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.facebook.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.instagram.com/dinotuku" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></Button>
            </p>
            <hr className="my-2" />
            <p className="small mt-3 mb-1">Recently I published my first paper</p>
            <a href="https://arxiv.org/abs/1804.00318" target="_blank" rel="noopener noreferrer"><p className="small">Joint Learning of Interactive Spoken Content Retrieval and Trainable User Simulator</p></a>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FrontPage;
