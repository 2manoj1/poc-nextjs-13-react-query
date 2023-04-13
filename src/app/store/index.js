import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

const getPokemonImage = (url) => {
	if (typeof url !== "string") return "";
	const id = url
		.split("/")
		.filter((i) => i !== "")
		.at(-1);
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const getPokemons = async () => {
	const dataList = await fetch("https://pokeapi.co/api/v2/pokemon").then(
		(res) => res.json()
	);

	const results = dataList?.results?.map(({ url, name }) => ({
		name,
		url,
		imgUrl: getPokemonImage(url),
	}));
	return { ...dataList, results };
};
