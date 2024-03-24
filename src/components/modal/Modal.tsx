
interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className=' w-3/5 mx-auto h-screen bg-slate-700 opacity-100 flex justify-center items-center'>
      <div className='mx-auto w-3/5 flex justify-center items-center'>{children}</div>
    </div>
  );
};
