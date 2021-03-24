import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';

const Resume = () => (
  <section id="resume" className="hero resume">
    <section className="full-height bg-white">
      <Container className="bg-white">
        <Row>
          <Col>
            <Jumbotron className="bg-white d-flex flex-wrap justify-content-around align-items-center">
              <div className="my-3">
                <h1 className="display-4">Resume</h1>
                <p className="lead">A little bit more about me<br/>If it's not showing, click <a href="https://drive.google.com/file/d/1b2QI9iTYt6TEHXsMe4TxS-11XazgVza-/view?usp=sharing" rel="noopener noreferrer">here</a></p>
              </div>
              <div className="iframe-wrapper">
                <div className="fixed-aspect-ratio">
                  <iframe className="ml-aute" title="resume" src="https://gdurl.com/KA4X/viewer" width="500" height="100%" frameBorder="0"></iframe>
                </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Resume;
