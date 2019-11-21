import React, { useState, useEffect } from "react";
import axios from "axios";
import NYC from "./NYC.png";
import styled from "styled-components";

const SelectedTours = (props) => {
	const TourTitle = styled.h1`
		font-size: 36px;
		text-align: center;
		margin-top: 50px;
	`;
	const Row = styled.div`
		color: black;
		display: flex;
		width: 80%;
		margin: 0px auto 80px auto;
		justify-content: space-between;

		img {
			width: 566px;
			height: 444px;
		}
	`;

	const RowContent1 = styled.div`
		width: 50%;
		height: 100%;
		color: black;

		h2 {
			margin: 0;
			font-size: 20px;
		}

		p {
			margin-top: 8px;
			font-size: 16px;
			line-height: 157.97%;
		}

		ul {
			list-style: none;
			padding: 0;
			line-height: 1.5;
			margin: 40px 0px 85px 0px;
		}

		button {
			width: 448px;
			height: 44px;
			background: #0e7c7b;
			border-radius: 5px;
			font-size: 20px;
			color: #f0f0f0;
			font-weight: 600;
		}
	`;
	const [ tour, setTour ] = useState();

	useEffect(() => {
		// const id = props.match.params.id;

		axios
			.get("https://bw-wanderlust.herokuapp.com/api/trip/trips")
			.then((response) => {
				console.log(response.data);
				// setMovie(response.data);
			})
			.catch(function(error) {
				console.log(error.toJSON());
			});
	}, []);

	// const { title, director, metascore, stars } = movie;

	return (
		<div>
			<TourTitle>NYC Helicopter Tour</TourTitle>
			<Row>
				<RowContent1>
					<h2>
						<strong>
							Sightseeing tour of<br />New York City by helicopter
						</strong>
					</h2>
					<p>
						Soar Above the city! You COULD spend half<br />your day flagging down cabs, deciphering<br />subway
						maps or walking hundreds of<br />blocks! Or you could see all the NYC<br />wonders in 20
						minutes... from the sky!
					</p>
					<ul>
						<li>
							<strong>Price:</strong> $215
						</li>
						<li>
							<strong>Location:</strong> 6 E River Bikeway, New York
						</li>
						<li>
							<strong>Duration:</strong> 20 minutes
						</li>
						<li>
							<strong>Languages: </strong> English/Espanol
						</li>
					</ul>

					<button>Book Now</button>
				</RowContent1>
				<img src={NYC} alt="NYC Pic" />
			</Row>
		</div>
	);
};

export default SelectedTours;
