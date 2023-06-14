import React from "react";

const PokemonCard = ({ name, imgUrl, weight = null, height = null }) => {
	return (
		<div className="w-full min-w-[240px] max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16 py-8">
			<div className="flex flex-col items-center pb-10 justify-center text-gray-900 dark:text-white">
				{imgUrl && (
					<img
						className="w-24 h-24 mb-3 rounded-full shadow-lg dark:shadow-slate-600"
						src={imgUrl}
						alt={name}
					/>
				)}
				<h5 className="mb-1 text-xl font-medium">{name}</h5>
				{weight && <p>Weight: {weight}</p>}
				{height && <p>Height: {height}</p>}
			</div>
		</div>
	);
};

export default PokemonCard;
