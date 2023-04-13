import React from "react";

const PokemonCard = ({ name, imgUrl }) => {
	return (
		<div className="w-full max-w-sm  bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-16 py-8">
			<div className="flex flex-col items-center pb-10 justify-center">
				{imgUrl && (
					<img
						className="w-24 h-24 mb-3 rounded-full shadow-lg"
						src={imgUrl}
						alt={name}
					/>
				)}
				<h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">
					{name}
				</h5>
			</div>
		</div>
	);
};

export default PokemonCard;