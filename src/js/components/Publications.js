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
                <p className="mt-1 mb-0">*Evangelos Alexiou, *Kuan Tung, Touradj Ebrahimi</p>
                <a href="https://infoscience.epfl.ch/record/279585" rel="noopener noreferrer">Towards neural network approaches for point cloud compression</a>
                <span>Proceedings Volume 11510, Applications of Digital Image Processing XLIII; 1151008 (2020)</span>
                <span>DOI: 10.1117/12.2569115</span>
                <p className="small">* Co-first author</p>
              </Card>
              <Card className="m-4">
                <p className="mt-1 mb-0">*K. Tung, *P. Liu, Y. Chuang, S. Wang and A. A. Wu</p>
                <a href="https://ieeexplore.ieee.org/document/8626634" rel="noopener noreferrer">Entropy-Assisted Multi-Modal Emotion Recognition Framework Based on Physiological Signals</a>
                <span>2018 IEEE-EMBS Conference on Biomedical Engineering and Sciences (IECBES), Sarawak, Malaysia, 2018, pp. 22-26</span>
                <span>DOI: 10.1109/IECBES.2018.8626634</span>
                <p className="small">* Co-first author</p>
                <p className="small">This paper was awarded the Best Paper Award</p>
              </Card>
              <Card className="m-4">
                <p className="mt-1 mb-0">*P. Chung, *K. Tung, C. Tai, H. Lee</p>
                <a href="https://www.isca-speech.org/archive/Interspeech_2018/abstracts/1346.html" rel="noopener noreferrer">Joint Learning of Interactive Spoken Content Retrieval and Trainable User Simulator</a>
                <span>Proc. Interspeech 2018, 2032-2036</span>
                <span>DOI: 10.21437/Interspeech.2018-1346</span>
                <p className="small">* Co-first author</p>
                <p className="small">This paper was awarded the <a href="https://www.isca-speech.org/iscaweb/index.php/honors/awards" rel="noopener noreferrer">ISCA Award for Best Student Paper</a></p>
              </Card>
            </div>
            <div className="my-3">
              <h1 className="display-3"><strong>Publications</strong></h1>
              <p className="lead">Point Cloud Compression<br/>Affective Computing<br/>Spoken Content Retrieval</p>
            </div>
          </Jumbotron>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Hobbies;
