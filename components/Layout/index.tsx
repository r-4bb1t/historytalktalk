import { ReactNode, Fragment } from "react";
import cc from "classcat";

export default function Layout({
  header = false,
  background,
  text,
  children,
}: {
  header?: boolean;
  background?: string;
  text?: string;
  children: ReactNode;
}) {
  return (
    <div
      className="w-full h-screen bg-primary flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` || "none" }}
    >
      {header && (
        <header className="fixed left-0 top-0 px-10 py-8 z-[30] xl:block hidden">
          <img src="/header-logo.png" />
        </header>
      )}
      <div className="w-full h-screen fixed inset-0 z-10 mix-blend-multiply opacity-70">
        <img src="/noise.jpg" className="w-full h-full object-cover" />
      </div>
      <div className="relative w-full hidden xl:flex items-center justify-center pl-36 pr-24">
        <img
          src="/logo.png"
          className={cc(["w-full", background && "opacity-0"])}
        />
        {text && (
          <div className="absolute z-[30] inset-0 flex flex-col text-3xl items-center justify-center text-white font-[chosun]">
            {text.split("\n").map((line, i) => (
              <div key={i}>{line}</div>
            ))}
          </div>
        )}
      </div>
      <div className="w-full max-w-[800px] flex justify-center shrink-0 z-[20]">
        <img
          src="/border-l.png"
          className="hidden lg:block h-screen object-contain translate-x-1/3"
        />
        <div className="w-full max-w-md h-screen overflow-auto bg-background z-[25]">
          {children}
        </div>
        <img
          src="/border-r.png"
          className="hidden lg:block h-screen object-contain -translate-x-1/3"
        />
      </div>
    </div>
  );
}
