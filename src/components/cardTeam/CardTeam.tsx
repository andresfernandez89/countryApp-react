import { useEffect } from 'react';
import { ICardTeamProps, IMember } from '../../interfaces/CountriesInterfaces';

const CardTeam = ({ member, modalState, setModalFn, setModalDataFn, team }: ICardTeamProps) => {

  const handleSelectMember = (id: number) => {
    const memberFinded = team.find(memb => memb.memberID === id) as IMember;
    setModalDataFn(memberFinded);
    setModalFn(!modalState);
  };

  useEffect(() => {
    setModalDataFn(member);
  }, [member.fullName]);

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
            onClick={() => handleSelectMember(member.memberID)}
          >
            More info
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardTeam;
