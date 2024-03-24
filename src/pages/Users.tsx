import { useState } from 'react';
import { Portal } from '../components/modal/Portal';
import { UserModal } from '../components/modal/UserModal';

export const Users = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <Portal modalState={modal} >
        <UserModal modalState={modal} setModalFn={setModal} />
      </Portal>
      <button type="button" onClick={() => setModal(!modal)}>Modal</button>
    </>
  );
};
