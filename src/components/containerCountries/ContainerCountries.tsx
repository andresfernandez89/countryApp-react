import { useEffect, useState } from "react";
import UseGetAllCountries from "../../hooks/UseGetAllCountries";
import CardCountry from "../cardCountry/CardCountry";

interface ICountryName {
  common: string;
}
interface ICountryFlag {
  svg: string;
  alt: string;
}

interface ICountry {
  cca2: string;
  name: ICountryName;
  flags: ICountryFlag;
  region: string;
}

const ContainerCountries = () => {
  const [countries, setCountries] = useState<ICountry[]>();
  useEffect(() => {
    async function dataFetched() {
      const data = await UseGetAllCountries();
      setCountries(data);
    }
    dataFetched();
  }, []);
  return (
    <section className="grid grid-cols-2 gap-x-1.5 gap-y-2 rounded bg-neutral p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-2 md:p-5 xl:grid-cols-6 2xl:grid-cols-7">
      {countries ? (
        countries.map((country) => (
          <CardCountry
            key={country.cca2}
            name={{ common: country.name.common }}
            region={country.region}
            flag={{ svg: country.flags.svg, alt: country.flags.alt }}
          />
        ))
      ) : (
        <p>Cargando países...</p>
      )}
    </section>
  );
};
export default ContainerCountries;
