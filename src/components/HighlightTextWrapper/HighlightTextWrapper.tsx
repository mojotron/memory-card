import { ReactNode } from 'react';

function HighlightTextWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="text-transparent bg-gradient-to-tr from-cyan-500 to-emerald-200 [background-clip:text] font-rubik uppercase">
      {children}
    </div>
  );
}

export default HighlightTextWrapper;
