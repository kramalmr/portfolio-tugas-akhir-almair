import { motion } from "framer-motion";

function TitleProgress({ title }) {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 120, damping: 12 }}
      className="w-full md:h-[70vh] flex flex-col justify-center mb-20 md:mb-10"
    >
      <div>
        <h1 className="md:text-center text-2xl md:text-4xl font-bold">
          This year's progress of
        </h1>
        <h1 className="text-5xl md:text-8xl font-extrabold md:text-center md:px-8 text-blue-500 md:-mt-3 tracking-tight">
          {title}
        </h1>
        <p className="md:text-center text-gray-500 mt-2">
          {`This is the ${title} progress for this year.`}
        </p>
      </div>
    </motion.div>
  );
}

function ProgressCard({ extracurricular }) {
  const { title, image, description, accomplishments, statistics } =
    extracurricular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: "spring", stiffness: 100 }}
      className="w-full flex flex-col mt-10 border-b-[0.5px] border-gray-300 pb-10"
    >
      <div className="text-2xl font-bold mb-5">{title}</div>
      <div className="w-full h-fit lg:h-[300px] flex flex-col lg:flex-row bg-gray-100 lg:bg-white text-start rounded-lg pb-5 lg:pb-0 lg:gap-5">
        <img
          src={image}
          alt=""
          className="w-full h-[200px] lg:h-auto lg:w-1/4 object-cover"
        />
        <div className="px-3 h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/4">
          <h2 className="text-xl font-bold text-blue-500 hidden lg:block">
            Description
          </h2>
          {description}
        </div>
        <div className="px-3 h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/4">
          <h2 className="text-xl font-bold text-blue-500">Accomplishments</h2>
          <ul className="list-disc list-inside">
            {accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="px-3 h-fit flex flex-col gap-2 mt-5 lg:border-b-0 lg:pb-0 lg:w-1/4">
          <h2 className="text-xl font-bold text-blue-500">Statistics</h2>
          <ul className="flex flex-col gap-2">
            {statistics.map((item, index) => (
              <ProgressBar key={index} name={item.name} level={item.level} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressCard2({ language }) {
  const { title, image, description, statistics } = language;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", delay: 0.2 }}
      className="w-full flex flex-col mt-10 border-b-[0.5px] border-gray-300 pb-10"
    >
      <div className="text-2xl font-bold mb-5">{title}</div>
      <div className="w-full h-fit lg:h-[300px] flex flex-col lg:flex-row bg-gray-100 lg:bg-white text-start rounded-lg pb-5 lg:pb-0 lg:gap-5">
        <img
          src={image}
          alt=""
          className="w-full h-[200px] lg:h-auto lg:w-1/3 object-cover"
        />
        <div className="px-3 h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0 lg:w-1/3">
          <h2 className="text-xl font-bold text-blue-500 hidden lg:block">
            Description
          </h2>
          {description}
        </div>
        <div className="px-3 h-fit flex flex-col gap-2 mt-5 lg:border-b-0 lg:pb-0 lg:w-1/3">
          <h2 className="text-xl font-bold text-blue-500">Statistics</h2>
          <ul className="flex flex-col gap-2">
            {statistics.map((item, index) => (
              <ProgressBar key={index} name={item.name} level={item.level} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressCard3({ diniyyah }) {
  const { title, accomplishments, statistics } = diniyyah;

  return (
    <motion.div
      initial={{ y: 40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 15 }}
      className="w-full h-[550px] flex flex-col border-gray-300 border-2 rounded-xl p-5"
    >
      <div className="text-2xl font-bold mb-5">{title}</div>
      <div className="w-full h-fit lg:h-[300px] flex flex-col lg:bg-white text-start rounded-lg pb-5 lg:pb-0 lg:gap-5">
        <div className="h-fit flex flex-col gap-2 mt-5 border-b-[0.5px] pb-3 border-gray-300 lg:border-b-0 lg:pb-0">
          <h2 className="text-xl font-bold text-blue-500">What I learned</h2>
          <ul className="list-disc list-inside">
            {accomplishments.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="h-fit flex flex-col gap-2 mt-5 lg:border-b-0 lg:pb-0">
          <h2 className="text-xl font-bold text-blue-500">Statistics</h2>
          <ul className="flex flex-col gap-2">
            {statistics.map((item, index) => (
              <ProgressBar key={index} name={item.name} level={item.level} />
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressBar({ name, level }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="ml-2 text-sm font-medium">{name}</div>
      <li className="flex items-center w-full bg-gray-200 rounded-full h-5 dark:bg-gray-700">
        <motion.div
          className="bg-blue-500 h-5 rounded-full pl-2 text-sm text-white"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {level}%
        </motion.div>
      </li>
    </div>
  );
}

function IDK() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="mt-10 mb-5 text-center font-light text-gray-500"
    >
      by
      <img
        src="/home.jpeg"
        alt="small image"
        className="inline-block w-10 mx-2"
      />
      almair
    </motion.div>
  );
}

const SummaryCard = ({
  image,
  title,
  understanding,
  capability,
  experience,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ type: "spring", damping: 12 }}
      className="flex flex-row gap-5 border p-4 rounded-lg w-full lg:w-1/3"
    >
      <div className="w-[100px] flex flex-col text-blue-500 text-xl font-semibold">
        <img src={image} alt={title} className="w-10 mr-3" />
        {title}
      </div>
      <div className="w-full flex flex-col gap-3">
        <ProgressBar name="Understanding" level={understanding} />
        <ProgressBar name="Capability" level={capability} />
        <ProgressBar name="Experience" level={experience} />
      </div>
    </motion.div>
  );
};

export {
  TitleProgress,
  ProgressCard,
  ProgressCard2,
  ProgressCard3,
  ProgressBar,
  SummaryCard,
  IDK,
};
