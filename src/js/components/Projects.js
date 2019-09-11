import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  CardText,
  CardBody,
  CardTitle,
  Badge
} from 'reactstrap';

const Projects = () => (
  <section id="projects" className="hero full-height bg-light">
    <Container className="bg-light">
      <Row>
        <Col>
          <Jumbotron className="bg-light d-flex flex-wrap justify-content-around align-items-center">
            <div className="my-3">
              <h1 className="display-3"><strong>Projects</strong></h1>
              <p className="lead">Programming projects I've been working on and finished</p>
            </div>
            <div className="half d-flex flex-wrap justify-content-around align-items-center">
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4">
                    <a href="https://github.com/porkbaby/AMIGOS" target="_blank" rel="noopener noreferrer">AMIGOS</a> <Badge className="align-middle" color="success">Python</Badge>
                    {/* <Badge className="align-middle" color="danger">Current</Badge> */}
                  </CardTitle>
                  <CardText className="font-weight-light small">Emotion recognition based on biomedical signal (AMIGOS dataset)</CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4">
                    <a href="https://github.com/dinotuku/ISCR-DRL" target="_blank" rel="noopener noreferrer">ISCR</a> <Badge className="align-middle" color="success">Python</Badge>
                    {/* <Badge className="align-middle" color="danger">Current</Badge> */}
                  </CardTitle>
                  <CardText className="font-weight-light small">Interactive spoken content retrieval with deep reinforcement learning</CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4"><a href="https://gdurl.com/d3ru/viewer" target="_blank" rel="noopener noreferrer">FRAIG</a> <Badge className="align-middle cyan" color="info">C++</Badge></CardTitle>
                  <CardText className="font-weight-light small">Transform And-Inverter circuit graph into Functionally Reduced And-Inverter Graph</CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/swip-hockey" target="_blank" rel="noopener noreferrer">swip-hockey</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">Air hockey on multiple devices (built with socket.io and swip.js)</CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/blog" target="_blank" rel="noopener noreferrer">blog</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">A blog with frontend, backend and database (built with React, Redux, Express and Knex.js)</CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/comment-page" target="_blank" rel="noopener noreferrer">comment-page</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">A comment page with backend (built with Express and React)</CardText>
                </CardBody>
              </Card>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Projects;
