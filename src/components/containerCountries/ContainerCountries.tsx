import CardCountry from "../cardCountry/CardCountry";

export default function ContainerCountries() {
	return (
		<section className="rounded p-2 md:p-5 bg-neutral grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-x-1.5  gap-y-2 md:gap-2">
			<CardCountry />
			<CardCountry />
			<CardCountry />
			<CardCountry />
			<CardCountry />
			<CardCountry />
			<CardCountry />
			<CardCountry />
		</section>
	);
}
