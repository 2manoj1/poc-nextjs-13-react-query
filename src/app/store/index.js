import { QueryClient } from "@tanstack/query-core";
import { cache } from "react";

const getQueryClient = cache(() => new QueryClient());
export default getQueryClient;

export const getPokemons = async () => {
	return await fetch("https://pokeapi.co/api/v2/pokemon").then((res) =>
		res.json()
	);
};
