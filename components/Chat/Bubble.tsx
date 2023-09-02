import cc from "classcat";
import BubbleTriangle from "./BubbleTriangle.svg";

export default function ChatBubble({
  isUser,
  texts,
}: {
  isUser: boolean;
  texts: string[];
}) {
  return (
    <div
      className={cc([
        "w-full flex mb-6 px-4 xl:pr-0 xl:pl-2",
        isUser ? "flex-row-reverse" : "flex-row",
      ])}
    >
      {!isUser && (
        <div className="rounded-full overflow-clip w-12 h-12 bg-white"></div>
      )}
      <div>
        {!isUser && <div className="ml-6 text-sm mb-2">학자 성삼문</div>}
        <div className="flex flex-col gap-2">
          {texts.map((text, i) => (
            <div
              key={i}
              className={cc([
                "w-full flex px-3 justify-start group items-start",
                isUser ? "flex-row-reverse" : "flex-row",
              ])}
            >
              <BubbleTriangle
                className={cc([
                  "w-4 opacity-0 group-first-of-type:opacity-100",
                  isUser ? "fill-gray-chat -scale-x-100" : "fill-green-mute",
                ])}
              />
              <div
                className={cc([
                  "px-3 py-2 rounded-xl w-fit max-w-[256px]",
                  isUser
                    ? "bg-gray-chat text-black group-first-of-type:rounded-tr-none"
                    : "bg-green-mute text-white group-first-of-type:rounded-tl-none",
                ])}
              >
                {text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
