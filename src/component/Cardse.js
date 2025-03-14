import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import Zoom from 'react-reveal/Zoom'
import ErrorMsg from "./ErrorMsg";
const Cardse = ({ itemsData }) => {
  return (
    <Row>
      <Zoom>
        {
          itemsData.length >= 1 ? (
          itemsData.map((item) => {
            return (
              <Col key={item.id} sm="12" className="my-1">
                <Card className="d-flex flex-row">
                  <Card.Img className="img-item" variant="top" src={item.imgUrl} />
                  <Card.Body>
                    <Card.Title>
                      <div className="d-flex justify-content-between">
                        <div className="item-title">{item.title}</div>
                        <div className="item-price">{item.price}</div>
                      </div>
                    </Card.Title>
                    <Card.Text as='div' className="py-2">
                      <div className="item-description">{item.description}</div>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })
        ) : (
          <div className='my-3 text-center fw-bold fs-3'><ErrorMsg/></div>
        )}
      </Zoom>
    </Row>
  );
};

export default Cardse;
//as='div' : to rwap content of Card.Text in div