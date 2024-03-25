
interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className='w-3/5 mx-auto bg-slate-700 opacity-100 flex justify-center Modal h-screen  overflow-auto'>
      <div className='w-3/5 absolute top-0 bottom-0 flex justify-center sub-Modal overflow-auto'>{children}</div>
    </div>
  );
};
