export default function CardCountry() {
	return (
		<>
			<div className="w-30 md:w-40 bg-slate-950 shadow-xl rounded">
				<figure className="p-1.5">
					<img src="https://flagcdn.com/br.svg" alt="Shoes" className="rounded-md" />
				</figure>
				<div className="items-center text-center pb-2">
					<h2 className="card-title justify-center">Argentina</h2>
					<p className="md:text-xs">South America</p>
				</div>
			</div>
		</>
	);
}
