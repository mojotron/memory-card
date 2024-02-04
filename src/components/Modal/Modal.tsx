import { ReactNode } from 'react';
import { ColorValues } from '../../constants/colorValues';

type OptionsType = {
  maxWidth?: number; // px
  colorStart: string; // css color
  colorEnd: string; // css color
};

type PropsType = {
  children: ReactNode;
  options?: undefined | OptionsType;
};

function Modal({ children, options }: PropsType) {
  return (
    <section
      className="rounded-md p-1 w-full"
      style={{
        background: `linear-gradient(45deg, ${options?.colorStart || ColorValues.defaultStart}, ${options?.colorEnd || ColorValues.defaultEnd})`,
        maxWidth: options?.maxWidth || '500px',
      }}
    >
      <div className="relative rounded-md p-8 w-full h-full bg-neutral-700 flex flex-col gap-5 justify-center items-center text-center">
        {children}
      </div>
    </section>
  );
}

export default Modal;
