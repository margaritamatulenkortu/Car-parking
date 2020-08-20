import React, {useState} from 'react';
import {Carousel} from 'react-bootstrap';



const  ControlledCarousel = () => {
	
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};

	return (
		<Carousel activeIndex={index} onSelect={handleSelect} className="m-3">
			<Carousel.Item>
				<img
					className=" img-thumbnail"
					src="https://ditech.media/wp-content/uploads/2020/06/shutterstock_1384554629-898x505-1.jpg"
					alt="First slide"
				/>
				<Carousel.Caption>
					<h3>AI Features</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" img-thumbnail"
					src="https://www.eletimes.com/wp-content/uploads/2019/03/artificial-intelligence.jpg"
					alt="Second slide"
				/>

				<Carousel.Caption>
					<h3>AI is comming </h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className=" img-thumbnail"
					src="https://img.ibxk.com.br/2020/05/13/13212156263191.jpg"
					alt="Third slide"
				/>

				<Carousel.Caption>
					<h3>AI</h3>
					<p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default ControlledCarousel;