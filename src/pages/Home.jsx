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
		<div>
			<div>
				<h2>Personajes</h2>
				<div className="d-flex overflow-auto gap-3 px-3" style={{ whiteSpace: 'nowrap' }}>
					{personajes.map((personaje, index) => (
						<div style={{ flex: '0 0 auto' }}>
							<TarjetaPersonaje key={index} personaje={personaje} />
						</div>
					))}
				</div>
			</div>

			<div>
				<h2>Planeta</h2>
				<div className="d-flex overflow-auto gap-3 px-3" style={{ whiteSpace: 'nowrap' }}>
					{planetas.map((planeta, index) => (
						<div style={{ flex: '0 0 auto' }}>
							<TarjetaPlaneta key={index} planeta={planeta} />
						</div>
					))}
				</div>
			</div>

			<div>
				<h2>Vehiculo</h2>
				<div className="d-flex overflow-auto gap-3 px-3" style={{ whiteSpace: 'nowrap' }}>
					{vehiculos.map((vehiculo, index) => (
						<div style={{ flex: '0 0 auto' }}>
							<TarjetaVehiculo key={index} vehiculo={vehiculo} />
						</div>
					))}
				</div>
			</div>

			

			

		</div>
	);
}; 