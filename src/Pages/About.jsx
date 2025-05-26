import { Navbar } from "../Components/Nav";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div
      className="w-full h-fit px-6 lg:px-50 py-10 font-figtree"
    >
      <Navbar />

      <div className="w-full h-fit mt-16 z-0">
        <div className="w-full mt-16 flex justify-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", delay: 0.2, stiffness: 120 }}
            className="bg-white/90 backdrop-blur-md border border-blue-300 p-8 max-w-3xl w-full font-sans"
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <motion.img
                src="/me.JPG"
                alt="Muhammad Akram Almair"
                className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-blue-500 object-cover"
                initial={{ rotate: -5, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring"}}
              />
              <motion.div
                initial={{ x: 20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold text-blue-500 tracking-wide">
                  Muhammad Akram Almair
                </h2>
                <p className="text-blue-500 font-semibold text-sm sm:text-base">
                  Student at Abu Dzar Boarding School, Rumpin, Bogor, Indonesia
                </p>
              </motion.div>
            </div>

            {/* Divider */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5 }}
              className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-6 origin-left"
            />

            {/* Paragraph Bio */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-5"
            >
              <p>
                I am Muhammad Akram Almair, a 16-year-old high school student
                with a passion for web development. I am enthusiastic about
                creating interactive web applications and learning new skills.
              </p>
              <p>
                I am currently exploring the world of web development, where I
                am honing my skills in HTML, CSS, JavaScript, and React. I am
                eager to learn more about the latest trends and technologies in
                the field.
              </p>
              <p>
                If you would like to get in touch, I can be reached at{" "}
                <a
                  href="mailto:akram3107@student.abudzar.sch.id"
                  className="text-blue-500 hover:underline font-medium"
                >
                  akram3107@student.abudzar.sch.id
                </a>
                . You can also view my projects on{" "}
                <a
                  href="https://github.com/kramalmr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline font-medium"
                >
                  GitHub @kramalmr
                </a>
                .
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
