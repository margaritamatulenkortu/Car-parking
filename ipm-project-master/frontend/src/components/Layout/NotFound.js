import React from 'react';
import {Card} from 'react-bootstrap';
const NotFound = () => (

  <Card className="text-center mx-auto ">
    <Card.Body>
      <Card.Title as='h1'>404</Card.Title>
      <Card.Text>
        Page Not Found
      </Card.Text>
    </Card.Body>
  </Card>
);

export default NotFound;