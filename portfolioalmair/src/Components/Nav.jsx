import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenDropdownMD, setIsOpenDropdownMD] = useState(false);
  
    
    const handleClick = () => {
      setIsOpen(!isOpen);
      setIsOpenDropdownMD(false);
    };
    const handleDropdownMD = () => {
      setIsOpenDropdownMD(!isOpenDropdownMD);
    };
    return (
      <div className="flex justify-between items-center">
        <div className="hidden md:flex w-full flex-row items-center justify-between">
          <Link
            to="/"
            className=" hover:text-blue-500 p-2 text-xl transition-all duration-200 hover:font-black font-semibold text-center"
          >
            Home
          </Link>
          <Link
            to="/about"
            className=" hover:text-blue-500 p-2 text-xl transition-all duration-200 hover:font-black font-semibold text-center"
          >
            About
          </Link>
          <div
            className="dropdown relative group cursor-pointer"
            onMouseEnter={() => setIsOpenDropdownMD(true)}
            onMouseLeave={() => setIsOpenDropdownMD(false)}
          >
            <button className=" group-hover:text-blue-500 p-2 text-xl z-11 transition-all duration-200 group-hover:font-black font-semibold text-center">
              2024/2025 Progress
              <svg
                className={`inline ml-2 h-5 w-5 ${
                  isOpenDropdownMD ? "rotate-180" : ""
                } text-gray-500 group-hover:text-blue-500 transition duration-300`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                ></path>
              </svg>
            </button>
            <div
              className={`dropdown-menu absolute w-full top-5 right-0 z-0 mt-2 bg-white shadow-lg ${
                isOpenDropdownMD ? "block" : "hidden"
              }`}
            >
              <Link
                to="/progress/ekstrakurikuler"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              >
                Extracurricular Activities
              </Link>
              <Link
                to="/progress/quran"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              >
                Qur'an Recitation & Memorization
              </Link>
              <Link
                to="/progress/linguistik"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              >
                Linguistics
              </Link>
              <Link
                to="/progress/diniyyah"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              >
                Diniyyah
              </Link>
              <Link
                to="/progress/it"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-500"
              >
                IT
              </Link>
            </div>
          </div>
          <Link
            to="/projects"
            className=" hover:text-blue-500 p-2 text-xl transition-all duration-200 hover:font-black font-semibold text-center"
          >
            Projects
          </Link>
        </div>
        <div className="md:hidden mb-10">
          <button
            className="absolute z-11 right-5 top-0 mt-4 mr-4 flex items-center px-3 py-2 border rounded text-gray-500 hover:text-gray-600 hover:border-gray-300"
            onClick={handleClick}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0V15z" />
            </svg>
          </button>
          {isOpen && (
            <div className="absolute top-0 right-0 z-10 mt-2 w-full bg-white rounded-md shadow-lg">
              <Link
                to="/"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                About
              </Link>
              <button
                onClick={handleDropdownMD}
                className="block text-start w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 items-center"
              >
                2024/2025 Progress
                <svg
                  className={`inline ml-2 h-5 w-5 ${
                    isOpenDropdownMD ? "rotate-180" : ""
                  } text-gray-500 transition duration-300`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              <div
                className={`max-h-0 overflow-hidden transition-all duration-300 ${
                  isOpenDropdownMD ? "max-h-fit" : ""
                }`}
              >
                <ul className="pl-6 py-2 space-y-4 bg-gray-50 border-b-[0.5px] border-gray-200">
                  <li className="text-sm text-gray-700 hover:bg-gray-100">
                    <Link to="/progress/ekstrakurikuler">
                      Extracurricular Activities
                    </Link>
                  </li>
                  <li className="text-sm text-gray-700 hover:bg-gray-100">
                    <Link to="/progress/quran">
                      Qur'an Recitation & Memorization
                    </Link>
                  </li>
                  <li className="text-sm text-gray-700 hover:bg-gray-100">
                    <Link to="/progress/linguistik">Linguistics</Link>
                  </li>
                  <li className="text-sm text-gray-700 hover:bg-gray-100">
                    <Link to="/progress/diniyyah">Diniyyah</Link>
                  </li>
                  <li className="text-sm text-gray-700 hover:bg-gray-100">
                    <Link to="/progress/it">IT</Link>
                  </li>
                </ul>
              </div>
              <Link
                to="/projects"
                className="block w-full border-b-[0.5px] border-gray-200 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Projects
              </Link>
            </div>
          )}
        </div>
      </div>
    );
}