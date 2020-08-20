import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';

//Components chnages
import Calendar from './Calendar';
import RoomList from './RoomList';
import BookingList from './BookingList'


const RoomZ = () => {

	return(
		
		<Container fluid>	
		  <Row>
				<Col  lg={3} md={3}>
				<h3 className='text-primary text-center my-3'>Available Rooms</h3>
					<RoomList/>
				</Col>

				<Col lg={6} md={9}>
				<h3 className='text-primary text-center  my-3'>Calendar</h3>
					<Calendar />
				</Col>

				<Col  lg={3} md={12}>
					<h3 className='text-primary text-center  my-3'>Booking </h3>
					<BookingList />
				</Col>
			</Row>
		</Container>
	)
}

export default RoomZ;