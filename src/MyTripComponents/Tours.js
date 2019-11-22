import React from "react";
import styled from "styled-components";

const Tours = (props) => {
	const Card = styled.div`
		box-shadow: 5px 10px 18px black;
		width: 20%;
		margin: 40px auto;
		padding: 10px;
		border-radius: 10px;
	`;
	console.log(props);
	return (
		<div className="added-tours">
			{props.toursList.map((tour, index) => {
				return (
					<Card className="tour" key={index}>
						{/* passed in index to be the key */}
						<h2>{tour.name}</h2>
						<p>Description: {tour.description}</p>
						<p>The tour is ${tour.price}</p>
						<p>The tour is {tour.duration} long.</p>
						<p>Tour check-in is at {tour.location}</p>
						<p>This tour is held in {tour.language}</p>
					</Card>
				);
			})}
		</div>
	);
};

export default Tours;
