import { Navbar } from "../Components/Nav";
import projects from "../data/projects.json";
import { motion } from "framer-motion";

function ProjectComp({ projects }) {
  const {
    title,
    description,
    weblink,
    gitlink,
    grade,
    semester,
    status,
    date,
    month,
    year,
    image,
    technologies,
  } = projects;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-2 pb-10 mb-10 border-b-[0.5px] border-gray-200 md:border-0 h-full"
    >
      <div className="text-3xl md:text-xl block md:hidden mb-3 font-bold mt-3 text-center">
        {title}
      </div>

      <motion.div
        style={{ backgroundImage: `url(${image})` }}
        onClick={() => window.open(weblink ? weblink : gitlink, "_blank")}
        className="mb-5 md:mb-0 cursor-pointer text-xs flex flex-col justify-between items-start transition-all h-[30vh] bg-cover bg-center p-3 text-white font-semibold rounded-xl"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-row justify-between w-full">
          <div className="shadow-lg text-blue-500 bg-white rounded-lg px-2 py-1">
            {grade} Semester {semester}
          </div>
          <div className="flex flex-row gap-1">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                className="text-xs bg-blue-500 rounded-full px-2 py-1 mr-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        </div>
        <motion.div
          className={`flex flex-row justify-between w-full ${
            status ? "bg-blue-500" : "bg-gray-500"
          } rounded-lg p-2 text-white font-semibold`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div>Status: {status ? "Finished" : "Ongoing"}</div>
          <div className="flex flex-row gap-1">
            <div>{date.from}</div>
            <div>-</div>
            <div>{date.to},</div>
            <div>
              {month} / {year}
            </div>
          </div>
        </motion.div>
      </motion.div>

      <div className="flex flex-col items-center justify-center text-center">
        <div className="text-xl hidden md:block font-bold mt-3 md:text-center">
          {title}
        </div>
        <div className="text-sm text-gray-500 md:text-center">
          {description}
        </div>
        <motion.div
          className="flex flex-row gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {weblink && (
            <a
              href={weblink}
              target="_blank"
              className="text-sm cursor-pointer px-5 py-2 mt-5 border-[0.5px] border-blue-500 rounded-lg text-blue-500 font-bold hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
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
        </motion.div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <div
      className="w-full h-fit px-6 lg:px-50 py-10 font-figtree"
    >
      <Navbar />
      <motion.div
        className="text-3xl font-bold mb-5 text-blue-500 text-center my-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Some of My Projects!
      </motion.div>
      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {projects.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: item.title.length * 0.01 }}
          >
            <ProjectComp projects={item} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
