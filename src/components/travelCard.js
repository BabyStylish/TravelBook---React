import React from "react";
import pointer from "../images/pointer.png"

export default function Card(props){
    return(
    <div>
        <div className="div--main">
            <img src={props.image}/>
            <div className="div--secondary">
                <h4 className="div--inline"><img src={pointer} className="pointer"/>{props.country}</h4>
                <a>View on Google Maps</a>
                <h1 className="title">{props.title}</h1>
                <p className="bold">{props.startDate} - {props.endDate}</p>
                <p className="description">{props.description}</p>
            </div>
        </div>
        <hr/>   
    </div>
    )
}