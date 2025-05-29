import rigoImageUrl from "../assets/img/rigo-baby.jpg";
import TarjetaPersonaje from "../components/TarjetaPersonaje.jsx";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import TarjetaPlaneta from "../components/TarjetaPlaneta.jsx"
import TarjetaVehiculo from "../components/TarjetaVehiculo.jsx";
import { useEffect, useState } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer()
	const [personajes, setPersonajes] = useState([]);
	const [planetas, setPlanetas] = useState([]);
	const [vehiculos, setVehiculos] = useState([]);

	useEffect(() => {
		fetch("https://www.swapi.tech/api/people")
			.then(res => res.json())
			.then(data => setPersonajes(data.results))
			.catch(err => console.error(err))


		fetch("https://www.swapi.tech/api/planets")
			.then(res => res.json())
			.then(data => setPlanetas(data.results))
			.catch(err => console.error(err))
			
		fetch("https://www.swapi.tech/api/vehicles")
			.then(res => res.json())
			.then(data => setVehiculos(data.results))
			.catch(err => console.error(err))		

	}, []);

	return (
		<div className="container d-flex flex-column w-100">
			<div className="d-flex flex-column w-100">
				<h2>Personajes</h2>
				<div className="d-flex  w-100 gap-4 flex-wrap">
					{personajes.map((personaje, index) => (
						<TarjetaPersonaje key={index} personaje={personaje} />
					))}
					
				</div>
			</div>

			<div className="d-flex flex-column w-100">
				<h2>Planetas</h2>
				<div className="d-flex  w-100 gap-4">
					<TarjetaPlaneta planeta={{ name: "Tierra" }} />
					<TarjetaPlaneta planeta={{ name: "Marte" }} />
					<TarjetaPlaneta planeta={{ name: "Venus" }} />
				</div>
			</div>

			<div className="d-flex flex-column w-100">
				<h2>Vehiculos</h2>
				<div className="d-flex  w-100 gap-4">
					<TarjetaVehiculo vehiculo={{ name: "nave1" }} />
					<TarjetaVehiculo vehiculo={{ name: "nave2" }} />
					<TarjetaVehiculo vehiculo={{ name: "nave3" }} />
				</div>
			</div>

		</div>
	);
}; 