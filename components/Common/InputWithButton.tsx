import { ReactNode } from "react";

export default function InputWithButton({
  button,
  disabled = false,
  onClick,
}: {
  button: ReactNode;
  disabled?: boolean;
  onClick: Function;
}) {
  return (
    <div className="flex gap-2 w-full border border-gray-500 rounded-lg p-2 bg-background">
      <div className="w-full px-2 flex items-center">
        <textarea
          className="w-full bg-transparent focus:outline-none resize-none"
          onKeyDown={(e) => {
            if (e.key === "Enter" && !e.shiftKey) {
              //@ts-ignore
              if (e.isComposing) return;
              e.preventDefault();
              onClick();
            }
          }}
        />
      </div>
      <button
        disabled={disabled}
        className="bg-[#0D622F] px-4 py-3 rounded-lg hover:bg-[#123821] disabled:bg-gray-500 transition-colors"
        onClick={() => onClick()}
      >
        {button}
      </button>
    </div>
  );
}
