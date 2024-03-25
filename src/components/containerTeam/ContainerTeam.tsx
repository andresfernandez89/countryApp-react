import { IMember, TeamProps } from '../../interfaces/CountriesInterfaces';
import CardTeam from "../cardTeam/CardTeam";

const team: IMember[] = [
  {
    memberID: 0,
    fullName: "Nicolas Selicki",
    photo:
      "https://media.licdn.com/dms/image/D4D35AQHZAWn5eszVkw/profile-framedphoto-shrink_800_800/0/1698340258119?e=1711915200&v=beta&t=GzCD5sV8fiPB1t1ZU-uTscDx_lVfxkxFI5kcGWPJ0qc",
    profession: "Fullstack Developer",
    linkedin: 'https://www.linkedin.com/in/nicolas-selicki-web-fullstack/',
    github: 'https://github.com/nico-slk/',
    country: "Argentina",
    city: "La Plata",
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa ea quia esse. Ex eum ipsa optio illum amet. Inventore incidunt perferendis ipsam dolore commodi delectus, eveniet quis blanditiis ipsum?'
  },
  {
    memberID: 1,
    fullName: "Andres Fernandez",
    photo:
      "https://media.licdn.com/dms/image/D4D03AQHV4itXUhj5VA/profile-displayphoto-shrink_800_800/0/1698939978659?e=1717027200&v=beta&t=WImUxavqEAAk1jWDqvhBFjj12A2keVCK1f1YGojSAaY",
    profession: "Front End Developer",
    linkedin: 'https://www.linkedin.com/in/andresfernandez89/',
    github: 'https://github.com/andresfernandez89',
    country: "Argentina",
    city: "Mar del Plata",
    about: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum ipsa ea quia esse. Ex eum ipsa optio illum amet. Inventore incidunt perferendis ipsam dolore commodi delectus, eveniet quis blanditiis ipsum?'
  },
];

const ContainerTeam = ({ modalState, setModalFn, setModalDataFn }: TeamProps) => {
  return (
    <section className="mt-16 grid gap-x-1.5 gap-y-2 rounded bg-neutral p-2 md:grid-cols-2 md:gap-2 md:p-5">
      {team ? (
        team.map((member) => (
          <CardTeam
            key={member.memberID}
            member={{
              memberID: member.memberID,
              fullName: member.fullName,
              photo: member.photo,
              profession: member.profession,
              country: member.country,
              city: member.city,
              linkedin: member.linkedin,
              github: member.github,
              about: member.about
            }}
            modalState={modalState}
            setModalFn={setModalFn}
            setModalDataFn={setModalDataFn}
            team={team}
          />
        ))
      ) : (
        <p>Cargando datos...</p>
      )}

    </section>
  );
};
export default ContainerTeam;
