import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ICountryData, ModalProps } from '../../interfaces/CountriesInterfaces';



export const CountryModal = ({ modalState, setModalFn, modalDataState }: ModalProps) => {
  const [cardCountryData, setCardCountryData] = useState<ICountryData>({
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

  useEffect(() => {
    setCardCountryData(modalDataState);
    console.log(cardCountryData);

  }, [modalDataState, cardCountryData.code]);

  return (
    <div className='w-full py-16 px-40 overflow-auto'>
      <div className='w-full flex justify-end mb-8'>
        <button className="btn btn-circle" onClick={() => setModalFn(!modalState)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div>
        <div className='w-full flex flex-row justify-between mb-8'>
          <h3 className='text-5xl'>{cardCountryData.originalName}</h3>
          <p className='flex text-right w-20 justify-end'>{`Code: ${cardCountryData.code}`}</p>
        </div>
      </div>

      <div className='w-full flex justify-center'>
        <img src={cardCountryData.svg} alt="bandera" className='mb-8 aspect-auto' />
      </div>

      <div>
        <p className='mb-8 text-3xl'>Information</p>

        <div className='w-full flex flex-col mb-8'>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`Region: ${cardCountryData.region}`}</p>
          </div>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`Original Name: ${cardCountryData.originalName}`}</p>
          </div>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`Population: ${cardCountryData.population}`}</p>
          </div>

        </div>

        <div className='flex flex-row-reverse'>
          <Link to={cardCountryData.googleMaps} target="_blank" className="btn glass text-zinc-50">
            Mapa
          </Link>

        </div>
      </div>

    </div>
  );
};
