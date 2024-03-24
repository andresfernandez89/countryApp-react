import { createPortal } from 'react-dom';
import { Modal } from './Modal';

interface Props {
  modalState: boolean,
  children: JSX.Element[] | JSX.Element;
}

export const Portal = ({ modalState, children }: Props) => {
  const modal: HTMLElement = document.getElementById("modal") as HTMLElement;

  return createPortal(
    modalState && <Modal >{children}</Modal>,
    modal
  );
};
