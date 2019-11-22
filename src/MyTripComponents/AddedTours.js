import React, { useState } from "react";
import TourForm from "./TourForm";
import Tours from "./Tours";
import styled from "styled-components";

export default function AddedTours() {
	const H1 = styled.h1`
		margin-top: 50px;
		text-align: center;
	`;
	const [ tours, setTours ] = useState([]);

	const addNewTour = (tour) => {
		setTours([ ...tours, tour ]);
	};

	return (
		<div className="App">
			<H1>Create Tour</H1>
			<TourForm addNewTour={addNewTour} />
			<Tours toursList={tours} />
		</div>
	);
}
