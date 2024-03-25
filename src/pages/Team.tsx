import { useState } from "react";
import ContainerTeam from "../components/containerTeam/ContainerTeam";
import { Portal } from "../components/modal/Portal";
import { UserModal } from "../components/modal/UserModal";
import { IMember } from '../interfaces/CountriesInterfaces';

export const Team = () => {
  const [modal, setModal] = useState<boolean>(false);
  const [modalData, setModalData] = useState<IMember>({
    memberID: 0,
    fullName: '',
    photo: '',
    profession: '',
    linkedin: '',
    github: '',
    country: '',
    city: '',
    about: '',
  });

  return (
    <>
      <ContainerTeam modalState={modal} setModalFn={setModal} setModalDataFn={setModalData} />
      <Portal modalState={modal}>
        <UserModal modalState={modal} setModalFn={setModal} modalDataState={modalData} />
      </Portal>
    </>
  );
};
