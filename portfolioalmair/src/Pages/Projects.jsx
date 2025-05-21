import { Navbar } from "../Components/Nav";

function ProjectComp() {
  return (
    <div className="p-2">
      <div className="flex flex-col justify-between items-start transition-all h-[30vh] bg-[url('/home.jpeg')] bg-cover bg-center p-3 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg duration-400 hover:shadow-blue-200 hover:-translate-y-2">
        <div>X Semester I</div>
        <div className="text-xs flex flex-row gap-2">
          <div>10</div>
          <div>-</div>
          <div>20,</div>
          <div>08/2023</div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-xl font-bold mt-3 md:text-center">
          Project Title
        </div>
        <div className="text-sm text-gray-500  md:text-center">
          Description of the project goes here. It should be concise and
          informative.
        </div>
        <button className="text-sm cursor-pointer px-5 py-2 mt-5 border-[0.5px] border-blue-500 rounded-lg text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300">
          Check it on GitHub{" "}
        </button>
      </div>
    </div>
  );
}
export default function Projects() {
  return (
    <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
      <Navbar />
      <div className="text-3xl font-bold mb-5 text-blue-500 text-center mt-10">
        Projects!
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProjectComp />
        <ProjectComp />
        <ProjectComp />
        {/* Add more project items as needed */}
      </div>
    </div>
  );
}
