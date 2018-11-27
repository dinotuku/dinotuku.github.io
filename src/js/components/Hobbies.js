import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card
} from 'reactstrap';
import ReactPlayer from 'react-player';

const Hobbies = () => (
  <section className="hero full-height bg-white">
    <Container className="bg-white">
      <Row>
        <Col>
          <Jumbotron className="bg-white d-flex flex-wrap-reverse justify-content-around align-items-center">
            <div className="half d-flex flex-wrap justify-content-around align-items-center">
              <Card className="two-fifth m-4">
                <ReactPlayer url="https://vimeo.com/302979750" width="100%" height="100%" />
                <p className="lead mt-1 mb-0"><a href="https://vimeo.com/302979750" target="_blank" rel="noopener noreferrer">我們一起走，好嗎</a></p>
              </Card>
              <Card className="two-fifth m-4">
                <ReactPlayer url="https://vimeo.com/265892054" width="100%" height="100%" />
                <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892054" target="_blank" rel="noopener noreferrer">I See Fire Intro</a></p>
              </Card>
              <Card className="two-fifth m-4">
                <ReactPlayer url="https://vimeo.com/265892462" width="100%" height="100%" />
                <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892462" target="_blank" rel="noopener noreferrer">Inochi no Namae</a></p>
              </Card>
              <Card className="two-fifth m-4">
                <ReactPlayer url="https://vimeo.com/265892102" width="100%" height="100%" />
                <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892102" target="_blank" rel="noopener noreferrer">Mr Moustafa</a></p>
              </Card>
              <Card className="two-fifth m-4">
                <ReactPlayer url="https://vimeo.com/265892521" width="100%" height="100%" />
                <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892521" target="_blank" rel="noopener noreferrer">Mickey Doraemon</a></p>
              </Card>
            </div>
            <div className="my-3">
              <h1 className="display-3"><strong>Hobbies</strong></h1>
              <p className="lead">Music and videos I made</p>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hobbies;
