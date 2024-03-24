import { useState } from "react";
import { Portal } from "../components/modal/Portal";
import { UserModal } from "../components/modal/UserModal";
import ContainerTeam from "../components/containerTeam/ContainerTeam";

export const Users = () => {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <ContainerTeam modalState={modal} setModalFn={setModal} />
      <Portal modalState={modal}>
        <UserModal modalState={modal} setModalFn={setModal} />
      </Portal>
    </>
  );
};
