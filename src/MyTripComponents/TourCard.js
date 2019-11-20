import React from "react"
import { Card, CardTitle, CardImg } from "reactstrap"

export default function TourCard(props) {
    return (
        <div className='tour-card'>
            <Card className='tour-card-ind'>
                <CardImg src={props.image} alt='descriptive tour image' />
                <CardTitle>{props.name}</CardTitle>
            </Card>
        </div>
    )
}
