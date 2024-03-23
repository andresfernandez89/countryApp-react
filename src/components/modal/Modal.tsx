
interface ChildrenProps {
  children: JSX.Element[] | JSX.Element;
}

export const Modal = ({ children }: ChildrenProps) => {
  return (
    <div className=' w-4/5 h-svh mx-auto flex justify-center items-center rounded-lg border-2 border-red-600 bg-slate-700'>
      <div className='mx-auto '>{children}</div>
    </div>
  );
};
