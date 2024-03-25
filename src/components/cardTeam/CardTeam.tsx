interface IMember {
  fullName: string;
  photo: string;
  profession: string;
  country: string;
  city: string;
}
interface ICardTeamProps {
  member: IMember;
  modalState: boolean;
  setModalFn: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardTeam = ({ member, modalState, setModalFn }: ICardTeamProps) => {
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={member.photo}
          alt="member profile photo"
          className="aspect-[5/7] h-[280px] w-[200px]"
        />
      </figure>
      <div className="card-body items-center">
        <h2 className="card-title">{member.fullName}</h2>
        <div className="mt-3">
          <p>{member.profession}</p>
          <p className="py-1">{member.city}</p>
          <p>{member.country}</p>
        </div>

        <div className="card-actions mt-11 justify-center">
          <button
            className="btn bg-cyan-900 opacity-100"
            onClick={() => setModalFn(!modalState)}
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
