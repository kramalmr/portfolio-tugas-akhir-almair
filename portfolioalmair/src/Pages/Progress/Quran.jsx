import { Navbar } from "../../Components/Nav";
import { TitleProgress, IDK } from "../../Components/Progress";

export default function Quran() {
  return (
    <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
      <Navbar />
      <TitleProgress title="Qur'an Recitation & Memorization" />
      <div className="md:text-center flex flex-col lg:flex-row lg:justify-center lg:gap-5">
        <div className="h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/3">
          <h2 className="text-xl font-bold">I Gained about :</h2>
          <h1 className="text-9xl font-black text-blue-500 tracking-tight">
            7 <span className="text-6xl -ml-6">Juz</span>
          </h1>
          <h1>
            This year,
            <br /> 11th Juz - 3rd Juz <br /> about almost 1/3 of the Qur'an
          </h1>
        </div>
        <div className="h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/3 lg:border-x-[0.5px]">
          <h2 className="text-xl font-bold">In Total of:</h2>
          <h1 className="text-9xl font-black text-blue-500 tracking-tight">
            27 <span className="text-6xl -ml-6">Juz</span>
          </h1>
          <h1>
            This year,
            <br /> 30th Juz - 3rd Juz <br /> so close to finishing the Qur'an
          </h1>
        </div>
        <div className="h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/3">
          <h2 className="text-xl font-bold">Fluent in:</h2>
          <h1 className="text-9xl font-black text-blue-500 tracking-tight">
            7 <span className="text-6xl -ml-6">Juz</span>
          </h1>
          <h1>
            In total,
            <br /> I can recite 7 Juz fluently
          </h1>
        </div>
      </div>
      <IDK />
    </div>
  );
}
