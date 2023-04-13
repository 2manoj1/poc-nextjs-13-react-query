import { Inter } from "next/font/google";
import Pokemons from "./components/Pokemons";
import getQueryClient, { getPokemons } from "./store";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "./components/Hydrate";

const inter = Inter({ subsets: ["latin"] });

export default async function Home() {
	const client = getQueryClient();
	await client.prefetchQuery({
		queryKey: ["pokemons"],
		queryFn: () => getPokemons(),
	});
	const dehydratedState = dehydrate(client, {
		shouldDehydrateQuery: () => true,
	});

	return (
		<main>
			<Hydrate state={dehydratedState}>
				<Pokemons />
			</Hydrate>
		</main>
	);
}
