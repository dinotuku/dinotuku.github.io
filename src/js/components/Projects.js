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
                    <a href="https://github.com/dinotuku/UFOdex" rel="noopener noreferrer">UFOdex</a> <Badge className="align-middle" color="warning">JavaScript</Badge>
                    {/* <Badge className="align-middle" color="danger">Current</Badge> */}
                  </CardTitle>
                  <CardText className="font-weight-light small">A device that helps you spot UFOs.<br/><a href="https://com-480-data-visualization.github.io/com-480-project-een1/" rel="noopener noreferrer">Link to the website</a></CardText>
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
                  <CardTitle className="h4">
<<<<<<< HEAD
                    <a href="https://github.com/dinotuku/SOSN" rel="noopener noreferrer">SOSN</a> <Badge className="align-middle" color="success">Python</Badge> <Badge className="align-middle" color="warning">JavaScript</Badge>
                  </CardTitle>
                  <CardText className="font-weight-light small"><b>S</b>tack <b>O</b>verflow as a <b>S</b>ocial <b>N</b>etwork. User interaction analysis on Stack Overflow.<br/><a href="https://stack-overflow-as-a-social-network.github.io/" rel="noopener noreferrer">Link to the data story</a></CardText>
=======
                    <a href="https://github.com/dinotuku/ISCR-DRL" target="_blank" rel="noopener noreferrer">ISCR</a> <Badge className="align-middle" color="success">Python</Badge>
                    {/* <Badge className="align-middle" color="danger">Current</Badge> */}
                  </CardTitle>
                  <CardText className="font-weight-light small">Interactive spoken content retrieval with deep reinforcement learning</CardText>
>>>>>>> 46970627bd0510dad1912ebec5784fdbd78649e2
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
<<<<<<< HEAD
                  <CardTitle className="h4">
                    <a href="https://github.com/dinotuku/MovieLens" rel="noopener noreferrer">MovieLens</a> <Badge className="align-middle" color="success">Python</Badge>
                  </CardTitle>
                  <CardText className="font-weight-light small">A personalized movie recommendation system and exploration of MovieLens 100k</CardText>
=======
                  <CardTitle className="h4"><a href="https://gdurl.com/d3ru/viewer" target="_blank" rel="noopener noreferrer">FRAIG</a> <Badge className="align-middle cyan" color="info">C++</Badge></CardTitle>
                  <CardText className="font-weight-light small">Transform And-Inverter circuit graph into Functionally Reduced And-Inverter Graph</CardText>
>>>>>>> 46970627bd0510dad1912ebec5784fdbd78649e2
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
<<<<<<< HEAD
                  <CardTitle className="h4">
                    <a href="https://github.com/dinotuku/TweetsSA" rel="noopener noreferrer">TweetsSA</a> <Badge className="align-middle" color="success">Python</Badge>
                  </CardTitle>
                  <CardText className="font-weight-light small">Sentiment classification with 2.5 million tweets. Ranked 1st in the <a href="https://www.aicrowd.com/challenges/epfl-ml-text-classification-01b777b0-a83a-412a-b6f8-f3dc53cb1bce/leaderboards" rel="noopener noreferrer">AIcrowd competition</a></CardText>
=======
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/swip-hockey" target="_blank" rel="noopener noreferrer">swip-hockey</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">Air hockey on multiple devices (built with socket.io and swip.js)</CardText>
>>>>>>> 46970627bd0510dad1912ebec5784fdbd78649e2
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
<<<<<<< HEAD
                  <CardTitle className="h4">
                    <a href="https://github.com/porkbaby/AMIGOS" rel="noopener noreferrer">AMIGOS</a> <Badge className="align-middle" color="success">Python</Badge>
                  </CardTitle>
                  <CardText className="font-weight-light small">Emotion recognition based on biomedical signal (AMIGOS dataset)</CardText>
=======
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/blog" target="_blank" rel="noopener noreferrer">blog</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">A blog with frontend, backend and database (built with React, Redux, Express and Knex.js)</CardText>
>>>>>>> 46970627bd0510dad1912ebec5784fdbd78649e2
                </CardBody>
              </Card>
              <Card className="two-fifth m-3">
                <CardBody>
<<<<<<< HEAD
                  <CardTitle className="h4">
                    <a href="https://github.com/dinotuku/ISCR-DRL" rel="noopener noreferrer">ISCR</a> <Badge className="align-middle" color="success">Python</Badge>
                  </CardTitle>
                  <CardText className="font-weight-light small">Interactive spoken content retrieval with deep reinforcement learning</CardText>
=======
                  <CardTitle className="h4"><a href="https://github.com/dinotuku/comment-page" target="_blank" rel="noopener noreferrer">comment-page</a> <Badge className="align-middle" color="warning">Javascript</Badge></CardTitle>
                  <CardText className="font-weight-light small">A comment page with backend (built with Express and React)</CardText>
>>>>>>> 46970627bd0510dad1912ebec5784fdbd78649e2
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
