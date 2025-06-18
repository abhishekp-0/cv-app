import React from "react";
import "../../styles/Resume.css";

export default function Item({itemInfo}){
    return (
        <div className="section-item">
            <div className="item-dates">
                <p className="item-date">{itemInfo.startDate} – {itemInfo.endDate}</p>
                <p className="item-location">{itemInfo.location}</p>
            </div>
            <div className="item-details">
                <h3 className="item-title">{itemInfo.title}</h3>
                <p className="item-subtitle">{itemInfo.subtitle}</p>
                {itemInfo.description !== "" && <p>{itemInfo.description}</p>}
            </div>
        </div>
    );
}