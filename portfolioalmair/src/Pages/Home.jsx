import { Navbar } from "../Components/Nav.jsx";
import { motion } from "framer-motion";

function Home() {
  return (
    <div className="w-full h-screen px-6 lg:px-50 py-10 font-figtree">
      <Navbar />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          delay: 0.3,
          stiffness: 500,
          damping: 20,
          duration: 0.5,
        }}
        className="bg-blue-500 w-full h-[90%] mt-5 p-5 md:p-10 bg-cover bg-center bg-[url('/bam.JPG')] flex flex-col justify-end items-end text-end text-white text-2xl font-bold"
      >
        <motion.a
          href="https://github.com/kramalmr"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          
          className="mb-5"
        >
          <img
            src="/github.png"
            alt="GitHub"
            className="w-10 mb-5 cursor-pointer"
          />
        </motion.a>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            mass: 1,
            delay: 0.5,
            duration: 0.5,
          }}
        >
          Muhammad Akram Almair
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            mass: 1,
            delay: 0.6,
            duration: 0.5,
          }}
        >
          Passion in Coding.
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            mass: 1,
            delay: 0.7,
            duration: 0.5,
          }}
        >
          16 years old
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 500,
            damping: 20,
            mass: 1,
            delay: 0.8,
            duration: 0.5,
          }}
        >
          Student
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Home;
