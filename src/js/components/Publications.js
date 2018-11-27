import React from 'react';
import {
  Container,
  Row,
  Col,
  Jumbotron,
  Card
} from 'reactstrap';

const Hobbies = () => (
  <section id="publications" className="hero full-height bg-white">
    <Container className="bg-white">
      <Row>
        <Col>
          <Jumbotron className="bg-white d-flex flex-wrap-reverse justify-content-around align-items-center">
            <div className="half d-flex flex-wrap justify-content-around align-items-center">
              <Card className="m-4">
                <p className="mt-1 mb-0">*Tung, K., *Liu, P. K., Chuang, Y. C., Wang, S. H., & Wu, A. Y. (2018). <a href="https://arxiv.org/abs/1809.08410" target="_blank" rel="noopener noreferrer">Entropy-Assisted Multi-Modal Emotion Recognition Framework Based on Physiological Signals</a>. arXiv preprint arXiv:1809.08410.</p>
                <p className="small">* Co-first author</p>
              </Card>
              <Card className="m-4">
                <p className="mt-1 mb-0">*Chung, P., *Tung, K., Tai, C., Lee, H. (2018) <a href="https://www.isca-speech.org/archive/Interspeech_2018/abstracts/1346.html" target="_blank" rel="noopener noreferrer">Joint Learning of Interactive Spoken Content Retrieval and Trainable User Simulator</a>. Proc. Interspeech 2018, 2032-2036, DOI: 10.21437/Interspeech.2018-1346.</p>
                <p className="small">* Co-first author</p>
              </Card>
            </div>
            <div className="my-3">
              <h1 className="display-3"><strong>Publications</strong></h1>
              <p className="lead">Affective Computing and Spoken Content Retrieval</p>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hobbies;
