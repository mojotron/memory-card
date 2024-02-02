import { ReactNode } from 'react';

type OptionsType = {
  maxWidth?: number; // px
  colorStart: string; // css color
  colorEnd: string; // css color
};

type PropsType = {
  children: ReactNode;
  options?: undefined | OptionsType;
};

function GradientUnderlay({ children, options = undefined }: PropsType) {
  return (
    <div
      className="rounded-md p-1 w-full max-w-[500px]"
      style={{
        background: `linear-gradient(45deg, ${options?.colorStart || '#06b6d4'}, ${options?.colorEnd || '#10b981'})`,
        maxWidth: options?.maxWidth || '500px',
      }}
    >
      {children}
    </div>
  );
}

export default GradientUnderlay;
