
interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CountryModal = ({ modalState, setModalFn }: Props) => {
  return (
    <div className=''>
      <div>CountryModal</div>
      {/* <button type="button" className='rounded-full bg-cyan-900 h-8 w-32' onClick={() => setModalFn(!modalState)}> Close </button> */}
      <button className="btn btn-circle" onClick={() => setModalFn(!modalState)}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
  );
};
