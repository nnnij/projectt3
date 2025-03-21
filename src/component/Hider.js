import React from 'react'
import { Col, Row } from 'react-bootstrap'

const Hider = () => {
  return (
    <div>
      <Row className='py-2'>
        <Col sm='12' className='justify-content-center text-center'>
            <div className='title'>قائمة الطعام</div>
            <div className='justify-content-center d-flex'>
                <p className='underline'></p>
            </div>
        </Col>
      </Row>
    </div>
  )
}

export default Hider
