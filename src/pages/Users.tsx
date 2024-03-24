import { useState } from 'react';
import { Portal } from '../components/modal/Portal';
import { UserModal } from '../components/modal/UserModal';

export const Users = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <div className='grid grid-cols-2 gap-x-1.5 gap-y-2 rounded bg-neutral p-2 sm:grid-cols-3 md:grid-cols-4 md:gap-2 md:p-5  xl:grid-cols-6 2xl:grid-cols-7'>
      <Portal modalState={modal} >
        <UserModal modalState={modal} setModalFn={setModal} />
      </Portal>
      <button type="button" className='rounded-full bg-cyan-900 h-8 w-32' onClick={() => setModal(!modal)}>Modal</button>
    </div>
  );
};
