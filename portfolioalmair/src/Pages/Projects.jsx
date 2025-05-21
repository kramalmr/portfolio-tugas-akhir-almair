import { Navbar } from "../Components/Nav";

export default function Projects() {
    return (
        <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
        <Navbar />
        <div className="text-2xl font-bold mb-5">Projects</div>
        <div className="w-full h-fit lg:h-[300px] flex flex-col lg:flex-row bg-gray-100 lg:bg-white text-start rounded-lg pb-5 lg:pb-0 lg:gap-5">
            <img
            src="/home.jpeg"
            alt=""
            className="w-full h-[200px] lg:h-auto lg:w-1/3 object-cover"
            />
            <div className="px-3 h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/3">
            <h2 className="text-xl font-bold text-blue-500 hidden lg:block">Description</h2>
            <p>My projects are available on my GitHub account.</p>
            </div>
        </div>
        </div>
    );
    }