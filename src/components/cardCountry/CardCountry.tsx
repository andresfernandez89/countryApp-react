import { useEffect, useState } from 'react';
import { UsegetCountryByCode } from '../../hooks/UseGetAllCountries';
import { ICountryCard, ICountryData } from '../../interfaces/CountriesInterfaces';



const CardCountry = ({
  code,
  name,
  flag,
  region,
  modalState,
  setModalFn,
  setModalDataFn
}: ICountryCard) => {
  const [country, setCountry] = useState<ICountryData>({
    code: '',
    svg: '',
    languages: [''],
    googleMaps: '',
    name: {
      common: ''
    },
    originalName: '',
    region: '',
    population: 0,
  });


  const handleSelectCountry = () => {
    setModalFn(!modalState);
    setModalDataFn(country);
  };

  const handleFecth = async (code: string) => {
    try {
      const data = await UsegetCountryByCode(code);
      console.log(data[0]);

      await setCountry({
        code: data[0].cca2,
        svg: data[0].flags.svg,
        languages: [''],
        googleMaps: data[0].maps.googleMaps,
        name: {
          common: data[0].name.common
        },
        originalName: data[0].name.official,
        region: data[0].region,
        population: data[0].population,
      });

    } catch (error) {
      console.error('Country fetch error: ' + error);

    }
  };

  useEffect(() => {
    handleFecth(code);
  }, [code]);


  return (
    <>
      <div className="w-30 rounded bg-base-100 shadow-xl md:w-40">
        <figure className="px-1.5 py-[9px]">
          <img
            title={`${name.common} flag`}
            src={flag.svg}
            alt={flag.alt}
            className="w-100 mx-auto aspect-[3/2] h-24 rounded-md object-cover"
          />
        </figure>
        <div className="items-center pb-2 text-center">
          <h2 className="card-title justify-center">{name.common}</h2>
          <p className="md:text-xs">{region}</p>
          <button
            type="submit"
            className="w-25 btn mt-1.5 h-8 bg-cyan-900"
            onClick={() => handleSelectCountry()}
          >
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCountry;
