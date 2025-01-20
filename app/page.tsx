"use client"
import Nav from "./components/nav";
export default function Home() {
  return (
    <div className="h-full w-full flex flex-col relative">
    <Nav/>
    <div className="h-full w-full min-h-screen flex items-end justify-between relative">
      <div className="ml-16">
        Hello
      </div>
      <img
        src="/me.png"
        className="h-[90%] mr-[50px]"
        alt=""
      />
    </div>
    </div>
  );
}
