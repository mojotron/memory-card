import { ImInfo as RulesIcon } from 'react-icons/im';

function RulesBtn({ onToggleShow }: { onToggleShow: () => void }) {
  return (
    <button
      type="button"
      onClick={onToggleShow}
      className="group flex justify-end gap-1 items-center absolute top-2 right-2 z-30"
    >
      <span className="font-bold invisible group-hover:visible">Rules</span>
      <RulesIcon size={18} />
    </button>
  );
}

export default RulesBtn;
