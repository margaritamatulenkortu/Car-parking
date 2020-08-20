import React from 'react';
import {Container,Row, Col, Spinner,Button} from 'react-bootstrap';
import ControllerCarousel from './ControllerCarousel';
import { CalendarComponent } from '@syncfusion/ej2-react-calendars';
const Home = () => {
	return (
		<Container  fluid>
			<Row >
				<Col xs={12} md={9} className='d-flex flex-column align-items-center' >	
					<h1 className="text-primary home-title" >Welcome to Cognizant</h1>
					<div className='w-75'> 
						<ControllerCarousel  />
					</div>	
				</Col>
					<Col xs={6} md={3} >
				<div className="mt-4 ">
					<CalendarComponent id="calendar" className=' mx-auto d-block'/>
				</div>
				<div className="m-5 d-flex justify-content-center">
					<em>content loading...</em>
					<Spinner animation="border"/>
				</div>
				</Col>
			</Row>
		</Container>
	)
}

export default Home;