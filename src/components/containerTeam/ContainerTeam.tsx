import CardTeam from "../cardTeam/CardTeam";

interface Props {
  modalState: boolean;
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

interface IMember {
  fullName: string;
  photo: string;
  profession: string;
  country: string;
  city: string;
}

const team: IMember[] = [
  {
    fullName: "Nicolas Selicki",
    photo:
      "https://media.licdn.com/dms/image/D4D35AQHZAWn5eszVkw/profile-framedphoto-shrink_800_800/0/1698340258119?e=1711915200&v=beta&t=GzCD5sV8fiPB1t1ZU-uTscDx_lVfxkxFI5kcGWPJ0qc",
    profession: "Fullstack Developer",
    country: "Argentina",
    city: "La Plata",
  },
  {
    fullName: "Andres Fernandez",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQHV4itXUhj5VA/profile-displayphoto-shrink_800_800/0/1698939978659?e=1717027200&v=beta&t=WImUxavqEAAk1jWDqvhBFjj12A2keVCK1f1YGojSAaY",
    profession: "Front End Developer",
    country: "Argentina",
    city: "Mar del Plata",
  },
];

const ContainerTeam = ({ modalState, setModalFn }: Props) => {
  return (
    <section className="mt-16 grid gap-x-1.5 gap-y-2 rounded bg-neutral p-2 md:grid-cols-2 md:gap-2 md:p-5">
      {team ? (
        team.map((member, index: number) => (
          <CardTeam
            key={index}
            member={{
              fullName: member.fullName,
              photo: member.photo,
              profession: member.profession,
              country: member.country,
              city: member.city,
            }}
            modalState={modalState}
            setModalFn={setModalFn}
          />
        ))
      ) : (
        <p>Cargando datos...</p>
      )}
    </section>
  );
};
export default ContainerTeam;
