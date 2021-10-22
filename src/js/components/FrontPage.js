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
            <p className="lead">Data science intern at <a href="https://www.open-systems.com/" rel="noopener noreferrer">Open Systems</a></p>
            <p className="lead">Master student in Electrical Engineering at <a href="https://www.epfl.ch/en/" rel="noopener noreferrer">EPFL</a></p>
            <hr className="my-2" />
            <p><span role="img" aria-label="love">🖤</span> data science, machine learning, web development, and <a href="/hobbies">music</a></p>
            <p className="mb-3">
              <Button color="link mx-2"><a href="https://github.com/dinotuku" rel="noopener noreferrer"><i className="fab fa-github fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.linkedin.com/in/dinotuku" rel="noopener noreferrer"><i className="fab fa-linkedin-in fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.facebook.com/dinotuku" rel="noopener noreferrer"><i className="fab fa-facebook-f fa-lg"></i></a></Button>
              <Button color="link mx-2"><a href="https://www.instagram.com/dinotuku" rel="noopener noreferrer"><i className="fab fa-instagram fa-lg"></i></a></Button>
            </p>
            {/* <hr className="my-2" />
            <p className="small mt-3 mb-1">My paper was awarded the Best Student Paper at Interspeech 2018</p>
            <a href="https://www.isca-speech.org/archive/Interspeech_2018/abstracts/1346.html" rel="noopener noreferrer"><p className="small">Joint Learning of Interactive Spoken Content Retrieval and Trainable User Simulator</p></a> */}
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default FrontPage;
