import React from 'react'
import { Col, Row } from 'react-bootstrap'
import Roll from 'react-reveal/Roll';
import ErrorMsg from './ErrorMsg';

const Category = ({filterbycategory , allCategory}) => {
  //to filter by category
  const onfilter=(cat)=>{
    filterbycategory(cat)
  }
  return (
    <Row>
      <Col sm='12' className='d-flex justify-content-center mb-3'>
        {
          allCategory.length>=1?(allCategory.map((cat)=>{
            return(
              <div  key={Math.random()}>
                <Roll>
                  <div>
                    <button onClick={()=>onfilter(cat)} style={{border:'solid 1px #B45B35'}} className='btn mx-2'>{cat}</button>
                  </div>
                </Roll>
              </div>
            )
          })):<div className='text-center fw-bold fs-3'><ErrorMsg/></div>
        }
      </Col>
    </Row>
  )
}

export default Category
