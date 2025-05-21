import { useNavigate } from "react-router-dom";
import { Navbar } from "../../Components/Nav.jsx";
import { TitleProgress, ProgressBar, IDK } from "../../Components/Progress";

export default function It() {
    const navigate = useNavigate();
  return (
    <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
      <Navbar />
      <TitleProgress title="Information Technology" />

      {/* SEMESTER 1 */}
      <div className="text-blue-500 text-2xl font-bold mb-5 lg:flex lg:flex-row lg:items-center lg:justify-between">
        <div className="md:text-5xl">Semester 1</div>
        <div className="flex flex-row items-center w-fit">
          <img
            src="/icon/js.png"
            alt=""
            className="block w-20 mb-5 lg:mb-0 lg:mr-5"
          />
          <img
            src="/icon/react.png"
            alt=""
            className="block w-20 mb-5 lg:mb-0 lg:mr-5"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row lg:gap-10">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-blue-500 text-white border-b-2 border-gray-300">
              <th className="px-4 py-2 text-center font-medium " colSpan={2}>
                JavaScript
              </th>
            </tr>
            <tr className="bg-blue-500 text-white border-b-2 border-gray-300">
              <th className="px-4 py-2 text-center font-medium border-r-2 border-gray-300">
                Dasar
              </th>
              <th className="px-4 py-2 text-center font-medium ">Lanjutan</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                {" "}
                ✅ Basic syntax of JavaScript
              </td>
              <td className="border px-4 py-2">✅ BOM</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ Variables, data types, and operators
              </td>
              <td className="border px-4 py-2">✅ DOM</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ Control structures (conditional statements and loops)
              </td>
              <td className="border px-4 py-2">✅ Event handler listeners</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Object & Class</td>
              <td className="border px-4 py-2">
                ✅ Bubling Capturing New Event
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Arrays and objects</td>
              <td className="border px-4 py-2">✅ Prevent Default</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ inheritance, Polymorphism, Encapsulation & Abstraction
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ Function & Data Convertion
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Modules</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ CallBack & Time Event & Promises
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Async & Fetch</td>
            </tr>
          </tbody>
        </table>

        <table className="table-auto w-full border-collapse mt-10 lg:mt-0">
          <thead>
            <tr className="bg-blue-500 text-white border-b-2 border-gray-300">
              <th className="px-4 py-2 text-center font-medium " colSpan={2}>
                React Dasar
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">
                ✅ Basic React Knowledge & Installation
              </td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ JSX</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ ATOMIC DESIGN</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ PROPS</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ CONDITIONAL RENDERING</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ List ( Map & Filter )</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ EVENT</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/projects")}
        className="p-4 font-semibold text-blue-500 border-2 border-blue-500 rounded-lg mt-5 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
      >
        See Projects
        <svg
          className="inline w-5 h-5 rotate-[-45deg] ml-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>

      {/* SEMESTER 2 */}
      <div className="text-blue-500 text-2xl font-bold mb-5 lg:flex lg:flex-row-reverse lg:items-center lg:justify-between mt-20">
        <div className="md:text-5xl">Semester 2</div>
        <div className="flex flex-row items-center w-fit">
          <img
            src="/icon/react.png"
            alt=""
            className="block w-20 mb-5 lg:mb-0 lg:mr-5"
          />
          <img
            src="/icon/git.png"
            alt=""
            className="block w-20 mb-5 lg:mb-0 lg:mr-5"
          />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse lg:gap-10">
        <table className="table-auto w-full border-collapse ">
          <thead>
            <tr className="bg-blue-500 text-white border-b-2 border-gray-300">
              <th className="px-4 py-2 text-center font-medium " colSpan={2}>
                Git
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Installasi Git</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Git Dasar</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Git Kolaborasi</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Branch</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Merge</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Revert</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Deployment</td>
            </tr>
          </tbody>
        </table>
        <table className="table-auto w-full border-collapse mt-10 lg:mt-0">
          <thead>
            <tr className="bg-blue-500 text-white border-b-2 border-gray-300">
              <th className="px-4 py-2 text-center font-medium " colSpan={2}>
                React Lanjutan
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ UseState</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ UseEffect</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Custom Hooks</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Router</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Axios / GET</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Dyanmic Router</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ POST</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ JWT</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Create / Read</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Update / Delete</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ Zustand / SM</td>
            </tr>
            <tr className="hover:bg-gray-100">
              <td className="border px-4 py-2">✅ TS</td>
            </tr>
          </tbody>
        </table>
      </div>
      <button
        onClick={() => navigate("/projects")}
        className="p-4 font-semibold text-blue-500 border-2 border-blue-500 rounded-lg mt-5 hover:bg-blue-500 hover:text-white transition-all duration-200 cursor-pointer"
      >
        See Projects
        <svg
          className="inline w-5 h-5 rotate-[-45deg] ml-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </button>
      <div className="mt-20">
        <div className="text-blue-500 text-2xl font-bold md:text-5xl">
          Summary
        </div>
        <div className="mt-5 flex flex-col lg:flex-row gap-5">
          <div className="flex flex-row gap-5 border p-4 rounded-lg w-full lg:w-1/3">
            <div className="w-[100px] flex flex-col text-blue-500 text-xl font-semibold">
              <img
                src="/icon/react.png"
                alt="React"
                className="w-10 h-10 mr-3"
              />
              React
            </div>
            <div className="w-full flex flex-col gap-3">
              <ProgressBar name="Understanding" level={90} />
              <ProgressBar name="Capability" level={60} />
              <ProgressBar name="Experience" level={50} />
            </div>
          </div>
          <div className="flex flex-row gap-5 border p-4 rounded-lg w-full lg:w-1/3">
            <div className="w-[100px] flex flex-col text-blue-500 text-xl font-semibold">
              <img src="/icon/git.png" alt="Git" className="w-10 h-10 mr-3" />
              Git
            </div>
            <div className="w-full flex flex-col gap-3">
              <ProgressBar name="Understanding" level={80} />
              <ProgressBar name="Capability" level={60} />
              <ProgressBar name="Experience" level={60} />
            </div>
          </div>
          <div className="flex flex-row gap-5 border p-4 rounded-lg w-full lg:w-1/3">
            <div className="w-[100px] flex flex-col text-blue-500 text-xl font-semibold">
              <img
                src="/icon/js.png"
                alt="JavaScript"
                className="w-10 h-10 mr-3"
              />
              JavaScript
            </div>
            <div className="w-full flex flex-col gap-3">
              <ProgressBar name="Understanding" level={90} />
              <ProgressBar name="Capability" level={70} />
              <ProgressBar name="Experience" level={60} />
            </div>
          </div>
        </div>
      </div>
      <IDK />
    </div>
  );
}

