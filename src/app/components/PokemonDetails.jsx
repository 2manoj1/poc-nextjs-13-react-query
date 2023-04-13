"use client";

import { useQuery } from "@tanstack/react-query";
import { getPokemonByID } from "@/app/store";
import PokemonCard from "./PokemonCard";

const PokemonDetails = ({ id }) => {
	const { data } = useQuery({
		queryKey: ["pokemon", id],
		queryFn: () => getPokemonByID(id),
		staleTime: 1000 * 60,
	});
	return (
		<div className="grid place-items-center my-16 gap-8">
			<h1 className="text-4xl">Details of Pokemon</h1>
			<PokemonCard
				name={data?.name}
				imgUrl={data?.imgUrl}
				weight={data?.weight}
				height={data?.height}
			/>
		</div>
	);
};

export default PokemonDetails;
