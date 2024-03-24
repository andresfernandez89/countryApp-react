interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserModal = ({ modalState, setModalFn }: Props) => {
  return (
    <div className="w-4/5 border-2 border-red-600 flex flex-col justify-center p-4" >
      <div className='w-full flex justify-end'>
        <button className="btn btn-circle" onClick={() => setModalFn(!modalState)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>
      <div className='w-full flex justify-center'>
        UserModal
      </div>
    </div>
  );
};
