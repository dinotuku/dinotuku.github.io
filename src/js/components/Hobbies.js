import React, { useState } from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card,
  TabContent, TabPane,
  Pagination, PaginationItem, PaginationLink
} from 'reactstrap';
import ReactPlayer from 'react-player';

const Hobbies = (props) => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = tab => {
    if (activeTab !== tab) setActiveTab(tab);
  }

  return (
    <section className="hero full-height bg-white">
      <Container className="bg-white">
        <Row>
          <Col>
            <Jumbotron className="bg-white d-flex flex-wrap-reverse justify-content-around align-items-center">
              <div className="half d-flex flex-column align-items-center mt-5">
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    {activeTab === '1' ? (
                      <div className="d-flex flex-wrap justify-content-around align-items-center" style={{ "width": "100%" }}>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/oTzu7G8pQNo" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/oTzu7G8pQNo" target="_blank" rel="noopener noreferrer">E A VERDADE</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/fOeOU1Uhhtw" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/fOeOU1Uhhtw" target="_blank" rel="noopener noreferrer">當我回家</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/_JLMMCC4WSg" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/_JLMMCC4WSg" target="_blank" rel="noopener noreferrer">Until It Happens to You</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/5UZiWEH4eK0" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/5UZiWEH4eK0" target="_blank" rel="noopener noreferrer">刻在我心底的名字</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/Qj-sqYCPJjQ" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/Qj-sqYCPJjQ" target="_blank" rel="noopener noreferrer">Fast Car</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://youtu.be/LZj0eNqd6Dk" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://youtu.be/LZj0eNqd6Dk" target="_blank" rel="noopener noreferrer">20200731 Tianmu</a></p>
                        </Card>
                      </div>
                    ) : null}

                  </TabPane>
                  <TabPane tabId="2">
                    {activeTab === '2' ? (
                      <div className="d-flex flex-wrap justify-content-around align-items-center" style={{ "width": "100%" }}>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://vimeo.com/302979750" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://vimeo.com/302979750" target="_blank" rel="noopener noreferrer">我們一起走，好嗎</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://vimeo.com/265892054" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892054" target="_blank" rel="noopener noreferrer">I See Fire Intro</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://vimeo.com/265892462" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892462" target="_blank" rel="noopener noreferrer">Inochi no Namae</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://vimeo.com/265892102" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892102" target="_blank" rel="noopener noreferrer">Mr Moustafa</a></p>
                        </Card>
                        <Card className="two-fifth m-4">
                          <ReactPlayer url="https://vimeo.com/265892521" width="100%" height="100%" controls={true} />
                          <p className="lead mt-1 mb-0"><a href="https://vimeo.com/265892521" target="_blank" rel="noopener noreferrer">Mickey Doraemon</a></p>
                        </Card>
                      </div>
                    ) : null}
                  </TabPane>
                </TabContent>
                <Pagination aria-label="Page navigation example">
                  <PaginationItem active={ activeTab === '1' }>
                    <PaginationLink onClick={() => { toggle('1'); }}>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem active={ activeTab === '2' }>
                    <PaginationLink onClick={() => { toggle('2'); }}>
                      2
                    </PaginationLink>
                  </PaginationItem>
                </Pagination>
              </div>
              <div className="my-3">
                <h1 className="display-3"><strong>Hobbies</strong></h1>
                <p className="lead">Music <span role="img" aria-label="guitar&mic">🎸🎤</span> and videos that I made</p>
              </div>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hobbies;
