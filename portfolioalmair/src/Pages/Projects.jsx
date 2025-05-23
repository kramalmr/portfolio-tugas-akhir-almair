import { Navbar } from "../Components/Nav";
import projects from "../data/projects.json";

function ProjectComp({projects}) {
  const { title, description, weblink, gitlink, grade, semester, status, date, month, year, image, technologies } = projects;
  return (
    <div className=" p-2">
      <div
        onClick={() => window.open(weblink ? weblink : gitlink, "_blank")}
        className={`cursor-pointer text-xs flex flex-col justify-between items-start transition-all h-[30vh] bg-[url('${image}')] bg-cover bg-center p-3 text-white font-semibold rounded-xl hover:scale-105 hover:shadow-lg duration-400 hover:${
          status ? "shadow-blue-200" : "shadow-gray-200"
        } hover:-translate-y-2`}
      >
        <div className="flex flex-row justify-between w-full">
          <div>
            {grade} Semester {semester}
          </div>
          <div className="flex flex-row gap-1">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="text-xs bg-blue-500 rounded-full px-2 py-1 mr-1"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
        <div
          className={`flex flex-row justify-between w-full ${
            status ? "bg-blue-500" : "bg-gray-500"
          } rounded-lg p-2 text-white font-semibold`}
        >
          <div>Status : {status ? "Finished" : "Ongoing"}</div>
          <div className="flex flex-row gap-1">
            <div>{date.from}</div>
            <div>-</div>
            <div>{date.to},</div>
            <div>
              {month} / {year}
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-xl font-bold mt-3 md:text-center">{title}</div>
        <div className="text-sm text-gray-500  md:text-center">
          {description}
        </div>
        <div className="flex flex-row gap-2">
          {weblink && (
            <a
              href={weblink}
              target="_blank"
              className="text-sm cursor-pointer px-5 py-2 mt-5 border-[0.5px] border-blue-500 rounded-lg text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              {" "}
              Website
            </a>
          )}
          <a
            href={gitlink}
            target="_blank"
            className="text-sm cursor-pointer px-5 py-2 mt-5 border-[0.5px] border-blue-500 rounded-lg text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
          >
            Github
          </a>
        </div>
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
        {projects.map((item) => (
          <ProjectComp key={item.title} projects={item} />
        ))}
      </div>
    </div>
  );
}

