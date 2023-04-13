"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../store";

const Pokemons = () => {
	const { data } = useQuery({
		queryKey: ["pokemons"],
		queryFn: () => getPokemons(),
		staleTime: 1000 * 60,
	});
	return (
		<div>
			<ul>
				{data?.results?.map(({ name }) => (
					<li key={name}>{name}</li>
				))}
			</ul>
		</div>
	);
};

export default Pokemons;
