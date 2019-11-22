import React, { useState } from "react";
import styled from "styled-components";
import "./TourForm.css";

const TourForm = (props) => {
	// const FormContent2 = styled.div`
	// 	display: flex;
	// 	flex-direction: column;

	// 	input {
	// 		width: 448px;
	// 		height: 52px;
	// 		background: #ffffff;
	// 		border-radius: 5px;
	// 		font-size: 18px;
	// 		padding-left: 15px;
	// 	}

	// 	label {
	// 		line-height: 200.97%;
	// 	}
	// `;

	const [ tour, setTour ] = useState({
		name: " ",
		description: " ",
		price: " ",
		duration: " ",
		location: " ",
		language: " "
	});

	const changeHandler = (event) => {
		setTour({ ...tour, [event.target.name]: event.target.value });
		// console.log(tour)
	};

	const submitForm = (event) => {
		event.preventDefault();
		props.addNewTour(tour);
		setTour({
			name: "",
			description: "",
			price: "",
			duration: "",
			location: ""
		});
		// this clears it out to empty string after
	};

	return (
		<div>
			<form className="Form" onSubmit={submitForm}>
				<div className="Info">
					<label htmlFor="title">Tour Name</label>
					<input
						name="name"
						id="name"
						type="text"
						placeholder="Tour Name"
						onChange={changeHandler}
						value={tour.name}
					/>
					<label htmlFor="description">Description</label>
					<input
						name="description"
						id="description"
						placeHolder="Description"
						onChange={changeHandler}
						value={tour.description}
					/>
					<label htmlFor="price">Price</label>
					<input name="price" id="price" placeHolder="Price" onChange={changeHandler} value={tour.price} />
				</div>
				<div className="Info">
					<label htmlFor="duration">Duration</label>
					<input
						name="duration"
						id="duration"
						placeHolder="Duration"
						onChange={changeHandler}
						value={tour.duration}
					/>
					<label htmlFor="location">Location</label>
					<input
						name="location"
						id="loaction"
						placeHolder="Location"
						onChange={changeHandler}
						value={tour.location}
					/>
					<label htmlFor="language">Language</label>
					<input
						name="language"
						id="language"
						placeHolder="English/Espanol"
						onChange={changeHandler}
						value={tour.language}
					/>
				</div>
				<button type="submit">Create Tour</button>
			</form>
		</div>
	);
};

export default TourForm;
