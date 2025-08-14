import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Timeline = ({ experiences }) => {
  return (
    <Container fluid className="timeline-container mt-0 p-0">
      <Row className='justify-content-center mb-3 py-2' style={{backgroundColor:'#28242c'}}>
        {experiences.map((experience, index) => (
          <center><Col key={index} md={9}>
            <div className={`timeline-item ${index % 2 === 0? 'left' : 'right'}`}>
              <div className="timeline-item-content bg-black rounded-3 shadow py-3 my-2 mb-4 mx-2 px-3" data-aos="zoom-in" data-aos-duration="1500" data-aos-easing="ease-in-out">
                <h1 className='mb-0 par'>{experience.companyName}</h1>
                <p className='fs-4 m-0 text-info par'>{experience.title}</p>
                <p className='par fs-5 px-1'>{experience.description1}</p>
                <p className='par fs-5 px-1'>{experience.description2}</p>
                <p className='par fs-5 px-1'>{experience.description3}</p>
                <small className='fs-4 text-info' style={{textAlign:"justify"}}>{experience.date}</small>
              </div>
            </div>
          </Col></center>
        ))}
      </Row>
    </Container>
  );
};

export default Timeline;
