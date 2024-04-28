import { useState } from "react";
import ContainerCountries from "../components/containerCountries/ContainerCountries";
import { CountryModal } from "../components/modal/CountryModal";
import { Portal } from "../components/modal/Portal";
import { ICountryData } from '../interfaces/CountriesInterfaces';

export default function Countries() {
  const [modal, setModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<ICountryData>({
    code: '',
    svg: '',
    languages: [''],
    googleMaps: '',
    name: {
      common: ''
    },
    originalName: '',
    region: '',
    population: 0,
  });

  return (
    <>
      <ContainerCountries modalState={modal} setModalFn={setModal} setModalDataFn={setModalData} />
      <Portal modalState={modal}>
        <CountryModal modalState={modal} setModalFn={setModal} modalDataState={modalData} />
      </Portal>
    </>
  );
}
