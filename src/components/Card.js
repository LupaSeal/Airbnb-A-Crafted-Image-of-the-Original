import React from "react"

const Card = (props) => {

    let badge
    
    if (props.status === "SOLD OUT"){
        badge = "SOLD OUT"
    } else if (props.status === "AVAILABLE"){
        badge = "ONLINE"
    } else {
        
    }

   

    return (
        <div className="card">
            {badge && <div className="badge">{badge}</div>}
            <img className="main-card-img" src={props.image} />

        <div className="star-align">
            <img className="star" src="./images/star.png" />
            <span><span className="space"></span>{props.rating.toFixed(1)}</span>
            <span><span className="space"></span><span className="grey">({props.likes})</span></span>
            <span><span className="space"></span><span className="grey">• {props.country}</span></span>
        </div>

        <p className="title">{props.title}</p>
        <h3 className="price">From ${props.price} <span className="price-bold">/ person</span></h3>

        </div>
    )
}

export default Card