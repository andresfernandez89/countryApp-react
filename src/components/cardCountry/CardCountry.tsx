
interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CardCountry({ modalState, setModalFn }: Props) {
  return (
    <>
      <div className="w-30 rounded bg-slate-950 shadow-xl md:w-40">
        <figure className="p-1.5">
          <img
            src="https://flagcdn.com/br.svg"
            alt="Shoes"
            className="rounded-md"
          />
        </figure>
        <div className="items-center pb-2 text-center">
          <h2 className="card-title justify-center">Argentina</h2>
          <p className="md:text-xs">South America</p>
          <button type="submit" className='rounded-full bg-cyan-900 h-8 w-24' onClick={() => setModalFn(!modalState)}> More info </button>
        </div>
      </div>
    </>
  );
}
