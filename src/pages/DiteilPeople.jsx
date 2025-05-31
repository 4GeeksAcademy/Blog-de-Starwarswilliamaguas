import React from "react";
import { useParams } from "react-router-dom";

const DiteilPeople = () => {
    const { uid } = useParams();
    console.log("UID from params:", uid);
    return (
        <div className="container">
            <h1>Detail People</h1>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/people/${uid}.jpg`} className="card-img-top" />
            <p>This is the detail page for a specific person.</p>
            {/* You can add more details about the person here */}
        </div>
    );
}
export default DiteilPeople;