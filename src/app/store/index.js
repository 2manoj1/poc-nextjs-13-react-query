import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

const getIdFromURL = (url) => {
	if (typeof url !== "string") return "";
	const id = url
		.split("/")
		.filter((i) => i !== "")
		.at(-1);
	return id;
};

const getPokemonImage = (url) => {
	const id = getIdFromURL(url);
	return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
};

export const getPokemons = async () => {
	const dataList = await fetch("https://pokeapi.co/api/v2/pokemon").then(
		(res) => res.json()
	);

	const results = dataList?.results?.map(({ url, name }) => ({
		name,
		url,
		id: getIdFromURL(url),
		imgUrl: getPokemonImage(url),
	}));
	return { ...dataList, results };
};

export const getPokemonByID = async (id) => {
	const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
	const data = await fetch(url).then((res) => res.json());

	return {
		...data,
		id,
		imgUrl: getPokemonImage(url),
	};
};
