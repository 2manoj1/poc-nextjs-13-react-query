"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemons } from "../store";
import PokemonCard from "./PokemonCard";

const Pokemons = () => {
	const { data } = useQuery({
		queryKey: ["pokemons"],
		queryFn: () => getPokemons(),
		staleTime: 1000 * 60,
	});
	return (
		<div className="container mx-auto my-16">
			<ul className="flex flex-col gap-4 items-center">
				{data?.results?.map(({ name, imgUrl }) => (
					<li key={name}>
						<PokemonCard name={name} imgUrl={imgUrl} />
					</li>
				))}
			</ul>
		</div>
	);
};

export default Pokemons;
