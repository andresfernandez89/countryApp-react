import CardCountry from "../cardCountry/CardCountry";

export default function ContainerCountries() {
  return (
    <section className="grid grid-cols-2 gap-x-1.5 gap-y-2 rounded bg-neutral p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-2 md:p-5  xl:grid-cols-6 2xl:grid-cols-7">
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
