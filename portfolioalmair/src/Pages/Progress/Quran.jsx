import { Navbar } from "../../Components/Nav";
import { TitleProgress, IDK } from "../../Components/Progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Quran() {
  // Sample data for improvement
  const data = [
    { name: "July", Murojaah: 24,  },
    { name: "Agustus", Murojaah: 20 },
    { name: "September", Murojaah: 21 },
    { name: "Oktober", Murojaah: 25 },
    { name: "November", Murojaah: 20 },
    { name: "Januari", Murojaah: 18 },
    { name: "Februari", Murojaah: 20 },
    { name: "Maret", Murojaah: 24 },
    { name: "April", Murojaah: 24 },
    { name: "Mei", Murojaah: 21 },
    { name: "Juni", Murojaah: 20 },
  ];

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

      <div className="w-full h-96 mt-20 -ml-10">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Murojaah" stroke="#2B7FFF" />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <IDK />
    </div>
  );
}
