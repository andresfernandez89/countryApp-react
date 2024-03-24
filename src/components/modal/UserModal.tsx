interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserModal = ({ modalState, setModalFn }: Props) => {
  return (
    <div>
      <div>
        UserModal
      </div>
      <button type="button" onClick={() => setModalFn(!modalState)}> Close </button>
    </div>
  );
};
