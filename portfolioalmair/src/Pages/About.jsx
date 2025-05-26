import { Navbar } from "../Components/Nav";

export default function About() {
  return (
    <div className="w-full h-fit px-6 lg:px-50 py-10 font-figtree">
      <Navbar />
      <div className="w-full h-fit mt-16 z-0">
        <div className="w-full mt-16 flex justify-center">
          <div className="bg-white/90 backdrop-blur-md border border-blue-300 p-8 max-w-3xl w-full font-sans">
            {/* Header */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-center sm:text-left">
              <img
                src="/me.JPG"
                alt="Muhammad Akram Almair"
                className="w-24 h-24 sm:w-28 sm:h-28 border-2 border-blue-500 object-cover transition-transform duration-1000 ease-in-out "
              />
              <div>
                <h2 className="text-3xl font-bold text-blue-500 tracking-wide">
                  Muhammad Akram Almair
                </h2>
                <p className="text-blue-500 font-semibold text-sm sm:text-base">
                  Student at Abu Dzar Boarding School, Rumpin, Bogor, Indonesia
                </p>
              </div>
            </div>

            {/* Divider */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent my-6"></div>

            {/* Paragraph Bio */}
            <div className="text-gray-700 text-sm sm:text-base leading-relaxed space-y-5">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

