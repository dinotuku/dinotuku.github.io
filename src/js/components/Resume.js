import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron
} from 'reactstrap';

const Resume = () => (
  <section className="hero resume">
    <section className="full-height bg-white">
      <Container className="bg-white">
        <Row>
          <Col>
            <Jumbotron className="bg-white d-flex flex-wrap justify-content-around align-items-center">
              <div className="my-3">
                <h1 className="display-4">Resume</h1>
                <p className="lead">About me</p>
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
