import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IMember, ModalMemberProps } from '../../interfaces/CountriesInterfaces';


export const UserModal = ({ modalState, setModalFn, modalDataState }: ModalMemberProps) => {
  const [memberData, setMemberData] = useState<IMember>({
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

  useEffect(() => {
    setMemberData(modalDataState);
  }, [memberData.fullName]);


  return (
    <div className='w-full py-16 px-40 overflow-auto'>

      <div className='w-full flex justify-end mb-8'>
        <button className="btn btn-circle" onClick={() => setModalFn(!modalState)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
      </div>

      <div>
        <div className='w-full flex flex-row justify-between mb-8'>
          <h3 className='text-5xl'>{memberData.fullName}</h3>
          <p className='flex text-right w-20 justify-end'>{`ID: ${memberData.memberID}`}</p>
        </div>
      </div>

      <div className='w-full flex justify-center '>
        <img src={memberData.photo} alt="bandera" className='mb-8 aspect-auto max-w-96' />
      </div>

      <div>
        <p className='mb-8 text-3xl'>Information</p>

        <div className='w-full flex flex-col mb-8'>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`Profesion: ${memberData.profession}`}</p>
          </div>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`Country: ${memberData.country}`}</p>
          </div>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`City: ${memberData.city}`}</p>
          </div>

          <div className='w-full flex flex-row justify-left mb-2'>
            <p className='font-thin'>{`About: ${memberData.about}`}</p>
          </div>

        </div>

        <div className='w-full flex flex-row justify-around'>
          <Link to={memberData.linkedin} target="_blank" className="btn glass text-zinc-50 w-24 h-24 ">
            <FontAwesomeIcon icon={faLinkedin} className='fa-3x' />
          </Link>
          <Link to={memberData.github} target="_blank" className="btn glass text-zinc-50 w-24 h-24 ">
            <FontAwesomeIcon icon={faGithub} className='fa-3x' />
          </Link>
        </div>
      </div>

    </div>
  );


  // return (
  //   <div >
  //     <div className='w-full flex flex-col justify-end'>
  //       <div className='w-full flex justify-end mb-8'>
  //         <button className="btn btn-circle" onClick={() => setModalFn(!modalState)}>
  //           <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  //         </button>
  //       </div>

  //       <div className='w-full flex flex-row justify-between mb-8'>
  //         <h3 className='text-5xl'>{memberData.fullName}</h3>
  //         <p className='flex text-right w-20 justify-end'>{`ID: ${memberData.memberID}`}</p>
  //       </div>

  //       <img src={memberData.photo} alt="bandera" className='mb-8 w-96 h-96' />

  //       <div>
  //         <p className='mb-8 text-3xl'>Information</p>

  //         <div className='w-full flex flex-col mb-8'>

  //           <div className='w-full flex flex-row justify-left mb-2'>
  //             <p className='font-thin'>{`Profesion: ${memberData.profession}`}</p>
  //           </div>

  //           <div className='w-full flex flex-row justify-left mb-2'>
  //             <p className='font-thin'>{`City: ${memberData.city}`}</p>
  //           </div>

  //           <div className='w-full flex flex-row justify-left mb-2'>
  //             <p className='font-thin'>{`About: ${memberData.about}`}</p>
  //           </div>

  //         </div>

  //         <div>

  //         </div>
  //       </div>

  //       <div className='w-full flex flex-row justify-around'>
  //         <Link to={memberData.linkedin} target="_blank" className="btn glass text-zinc-50 w-24 h-24 ">
  //           <FontAwesomeIcon icon={faLinkedin} className='fa-3x' />
  //         </Link>
  //         <Link to={memberData.github} target="_blank" className="btn glass text-zinc-50 w-24 h-24 ">
  //           <FontAwesomeIcon icon={faGithub} className='fa-3x' />
  //         </Link>
  //       </div>

  //     </div>
  //   </div>
  // );
};
