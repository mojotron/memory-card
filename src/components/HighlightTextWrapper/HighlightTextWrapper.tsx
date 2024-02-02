import { ReactNode } from 'react';

type OptionsType = {
  colorStart: string; // css color
  colorEnd: string; // css color
};

type PropsType = {
  children: ReactNode;
  options?: undefined | OptionsType;
};

function HighlightTextWrapper({ children, options = undefined }: PropsType) {
  return (
    <div
      className="font-rubik uppercase"
      style={{
        color: 'transparent',
        background: `linear-gradient(45deg, ${options?.colorStart || '#06b6d4'}, ${options?.colorEnd || '#10b981'})`,
        backgroundClip: 'text',
      }}
    >
      {children}
    </div>
  );
}

export default HighlightTextWrapper;
