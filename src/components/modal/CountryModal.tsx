
interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const CountryModal = ({ modalState, setModalFn }: Props) => {
  return (
    <div className=''>
      <div>CountryModal</div>
      <button type="submit" onClick={() => setModalFn(!modalState)}> Close </button>
    </div>
  );
};
