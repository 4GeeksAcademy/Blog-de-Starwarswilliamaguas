import React from 'react'
import { Link } from 'react-router-dom'

const TarjetaVehiculo = (props) => {
    return (
        <div className="card" style={{ width: "18rem", minWidth: "18rem" }}>
            <img src={`https://raw.githubusercontent.com/breatheco-de/swapi-images/refs/heads/master/public/images/vehicles/${props.vehiculo.uid}.jpg`} className="card-img-top"></img>
            <div className="card-body">
                <h5 className="card-title">{props.vehiculo.name}</h5>
                <div className="d-flex justify-content-between">
                    <Link to={"/"} className='btn btn-primary'>
                        learn more
                    </Link>
                    <button className='btn btn-outline-warning'>
                        <i className="fa-regular fa-heart"></i>
                    </button>

                </div>
            </div>
        </div>
    )
}

export default TarjetaVehiculo