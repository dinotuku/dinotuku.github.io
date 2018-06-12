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
              <h1 className="display-4">English</h1>
              <div className="iframe-wrapper">
                <div className="fixed-aspect-ratio">
                  <iframe className="ml-aute" title="eng_resume" src="https://gdurl.com/AJ57/viewer" width="500" height="100%" frameBorder="0"></iframe>
                </div>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
    <section className="full-height bg-light">
      <Container className="bg-light">
        <Row>
          <Col>
            <Jumbotron className="bg-light d-flex flex-wrap-reverse justify-content-around align-items-center">
              <div className="iframe-wrapper">
                <div className="fixed-aspect-ratio">
                  <iframe className="ml-aute" title="chi_resume" src="https://gdurl.com/705MF/viewer" width="500" height="700" frameBorder="0"></iframe>
                </div>
              </div>
              <h1 className="display-4 chi">中文</h1>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  </section>
);

export default Resume;
