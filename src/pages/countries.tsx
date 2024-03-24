import { useState } from 'react';
import ContainerCountries from "../components/containerCountries/ContainerCountries";
import { CountryModal } from '../components/modal/CountryModal';
import { Portal } from '../components/modal/Portal';

export default function Countries() {
  const [modal, setModal] = useState<boolean>(false);


  return (
    <>
      <ContainerCountries modalState={modal} setModalFn={setModal} />
      <Portal modalState={modal} >
        <CountryModal modalState={modal} setModalFn={setModal} />
      </Portal>
    </>
  );
}
