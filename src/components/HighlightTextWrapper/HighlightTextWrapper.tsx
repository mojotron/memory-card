import { ReactNode } from 'react';
import { ColorValues } from '../../constants/colorValues';

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
        background: `linear-gradient(45deg, ${options?.colorStart || ColorValues.defaultStart}, ${options?.colorEnd || ColorValues.defaultEnd})`,
        backgroundClip: 'text',
      }}
    >
      {children}
    </div>
  );
}

export default HighlightTextWrapper;
