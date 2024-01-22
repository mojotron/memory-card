import React from 'react';

function FlipCard({ flipped }: { flipped: boolean }) {
  return (
    <div className="group h-[100px] w-[100px] [perspective:1000px]">
      <div
        className="relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] "
        style={{ transform: flipped ? 'rotateY(180deg)' : '' }}
      >
        <div className="absolute inset-0 h-full w-full bg-red-400">Back</div>
        <div className="absolute inset-0 h-full w-full bg-blue-400 [transform:rotateY(180deg)] [backface-visibility:hidden]">
          Front
        </div>
      </div>
    </div>
  );
}

export default FlipCard;
// group-hover:[transform:rotateY(180deg)]
