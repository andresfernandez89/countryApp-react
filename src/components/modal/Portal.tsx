import { createPortal } from 'react-dom';
import { CountryModal } from './CountryModal';
import { Modal } from './Modal';

interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Portal = ({ modalState, setModalFn }: Props) => {
  const modal: HTMLElement = document.getElementById("modal") as HTMLElement;

  return createPortal(
    modalState && <Modal ><CountryModal modalState={modalState} setModalFn={setModalFn} /></Modal>,
    modal
  );
};
