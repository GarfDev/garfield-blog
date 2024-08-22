import React, { ReactNode } from "react";
import Nav from './Nav'

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <main className="flex justify-center bg-[#282c35] h-[100vh] overflow-y-scroll text-white">
      <div className="h-[100px] w-[90%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[40%] 2xl:w-[30%] flex flex-col">
        <Nav className="py-11" />
        {children}
      </div>
    </main>
  );
}
