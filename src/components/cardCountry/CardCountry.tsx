interface ICountryName {
  common: string;
}
interface ICountryFlag {
  svg: string;
  alt: string;
}

interface ICountry {
  name: ICountryName;
  flag: ICountryFlag;
  region: string;
  modalState: boolean;
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}
const CardCountry = ({
  name,
  flag,
  region,
  modalState,
  setModalFn,
}: ICountry) => {
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
            onClick={() => setModalFn(!modalState)}
          >
            More info
          </button>
        </div>
      </div>
    </>
  );
};

export default CardCountry;
