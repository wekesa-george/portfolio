import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="text-center">
        <div className="text-white text-[30px] font-bold mb-5">
          My Portfolio
        </div>
        <Image
          src="/me.webp" // Path relative to the public folder
          alt="Coming Soon"
          width={200} // Adjust the size as needed
          height={200}
          className="rounded-full" // Optional styles
        />
        <h1 className="mt-8 text-2xl text-white font-bold">Coming Soon</h1>
      </div>
    </div>
  );
}
