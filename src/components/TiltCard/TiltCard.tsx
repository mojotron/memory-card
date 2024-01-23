import { MouseEvent, useRef } from 'react';

function TiltCard() {
  const boundingRectRef = useRef<DOMRect | null>(null);

  const handleOnMouseEnter = (event: MouseEvent<HTMLDivElement>) => {
    boundingRectRef.current = event.currentTarget.getBoundingClientRect();
  };

  const handleOnMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    if (boundingRectRef.current === null) return;
    const x = event.clientX - boundingRectRef.current.left;
    const y = event.clientY - boundingRectRef.current.top;
    const xPercentage = x / boundingRectRef.current.width;
    const yPercentage = y / boundingRectRef.current.height;
    const xRotation = (0.5 - xPercentage) * 20;
    const yRotation = (0.5 - yPercentage) * 20;
    // swap values because of x and y axes behave diff in 3d enviroment
    event.currentTarget.style.setProperty('--x-rotation', `${yRotation}deg`);
    event.currentTarget.style.setProperty('--y-rotation', `${xRotation}deg`);
    event.currentTarget.style.setProperty('--x', `${xPercentage * 100}%`);
    event.currentTarget.style.setProperty('--y', `${yPercentage * 100}%`);
  };

  const handleOnMouseLeave = () => {
    boundingRectRef.current = null;
  };

  return (
    <div className="flex flex-col [perspective:1000px]">
      <div
        onMouseEnter={handleOnMouseEnter}
        onMouseMove={handleOnMouseMove}
        onMouseLeave={handleOnMouseLeave}
        className="group h-[200px] w-[160px] relative hover:[transform:rotateX(var(--x-rotation))_rotateY(var(--y-rotation))_scale(1.1)] transition-transform ease-in-out bg-green-500"
      >
        TiltCard
        <div></div>
      </div>
    </div>
  );
}

export default TiltCard;
