import getQueryClient, { getPokemonByID } from "@/app/store";
import { dehydrate } from "@tanstack/query-core";
import Hydrate from "@/app/components/Hydrate";
import PokemonDetails from "@/app/components/PokemonDetails";

const PokemonPage = async ({ params }) => {
	const { id } = params;
	const client = getQueryClient();
	await client.prefetchQuery({
		queryKey: ["pokemon", id],
		queryFn: () => getPokemonByID(id),
	});
	const dehydratedState = dehydrate(client, {
		shouldDehydrateQuery: () => true,
	});
	return (
		<main>
			<Hydrate state={dehydratedState}>
				<section className="container mx-auto">
					<PokemonDetails id={id} />
				</section>
			</Hydrate>
		</main>
	);
};

export default PokemonPage;
