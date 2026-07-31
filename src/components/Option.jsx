import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Option = ({pro}) => {
  return (
    <div className='inner'>
     <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={pro.image}  className='i'/>
      <Card.Body>
        <Card.Title>{pro.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <p>{pro.price}</p>
        <Button variant="primary">Buy Now</Button>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Option
