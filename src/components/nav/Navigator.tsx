import { NavLink } from 'react-router-dom';

interface NavStyle {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}

const activeStyle = (data: NavStyle) => {
  return {
    color: data.isActive ? '#dc2626' : '#fdba74',
  };
};

export const Navigator = () => {
  return (
    <div>
      <ul className='flex justify-between'>
        <li >
          <NavLink to="/" style={activeStyle} className='btn btn-wide mb-4'>Home</NavLink>
        </li>
        <li >
          <NavLink to="/countries" style={activeStyle} className='btn btn-wide mb-4'>Countries</NavLink>
        </li>
        <li >
          <NavLink to="/users" style={activeStyle} className='btn btn-wide mb-4'>Users</NavLink>
        </li>
      </ul>
    </div>
  );
};
