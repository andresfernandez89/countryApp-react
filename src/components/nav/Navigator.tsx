import { NavLink } from 'react-router-dom';

interface NavStyle {
  isActive: boolean;
  isPending: boolean;
  isTransitioning: boolean;
}

const activeStyle = (data: NavStyle) => {
  return {
    color: data.isActive
      ? "bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium"
      : "text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium",
  };
};

export const Navigator = () => {
  return (
    <div className=''>
      <ul className='flex justify-between'>
        <li className='' >
          <NavLink to="/" style={activeStyle} className='h-12 w-40 flex justify-center items-center cursor-pointer'>Home</NavLink>
        </li>
        <li className='' >
          <NavLink to="/countries" style={activeStyle} className='h-12 w-40 flex justify-center items-center cursor-pointer'>Countries</NavLink>
        </li>
        <li className='' >
          <NavLink to="/users" style={activeStyle} className='h-12 w-40 flex justify-center items-center cursor-pointer'>Users</NavLink>
        </li>
      </ul>
    </div>
  );
};

{/* <div class="flex space-x-4">
  <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
  <a href="#" class="bg-gray-900 text-white rounded-md px-3 py-2 text-sm font-medium" aria-current="page">Dashboard</a>
  <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Team</a>
  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Projects</a>
  <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium">Calendar</a>
</div> */}
