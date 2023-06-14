import { getQueryClient, getPokemonByID } from "@/app/store";
import { dehydrate } from "@tanstack/query-core";
import PokemonDetails from "@/app/components/PokemonDetails";
import Hydrate from "@/app/components/Hydrate";
import Link from "next/link";

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
				<section className="container mx-auto mt-8">
					<Link
						href="/"
						className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded">
						⬅️ Back
					</Link>
					<PokemonDetails id={id} />
				</section>
			</Hydrate>
		</main>
	);
};

export default PokemonPage;
