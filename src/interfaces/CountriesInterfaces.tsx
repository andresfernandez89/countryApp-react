export interface Props {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDataFn: React.Dispatch<React.SetStateAction<ICountryData>>;
}

export interface TeamProps {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDataFn: React.Dispatch<React.SetStateAction<IMember>>;
}

export interface ICountryFlag {
  svg: string;
  alt: string;
}

export interface ICountry {
  cca2: string;
  name: ICountryName;
  flags: ICountryFlag;
  region: string;
}

export interface ModalProps {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  modalDataState: ICountryData;
}

export interface ModalMemberProps {
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  modalDataState: IMember;
}

export interface ICountryData {
  code: string;
  svg: string;
  languages: string[];
  googleMaps: string;
  name: ICountryName;
  originalName: string;
  region: string;
  population: number;
}

export interface ICountryName {
  common: string;
}

export interface ICountryCard {
  code: string;
  name: ICountryName;
  flag: ICountryFlag;
  region: string;
  modalState: boolean,
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDataFn: React.Dispatch<React.SetStateAction<ICountryData>>;
}

export interface IMember {
  memberID: number;
  fullName: string;
  photo: string;
  profession: string;
  linkedin: string;
  github: string;
  country: string;
  city: string;
  about: string;
}
export interface ICardTeamProps {
  member: IMember;
  modalState: boolean;
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
  setModalDataFn: React.Dispatch<React.SetStateAction<IMember>>;
  team: IMember[];
}


export interface ContainerTeamProps {
  modalState: boolean;
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}
