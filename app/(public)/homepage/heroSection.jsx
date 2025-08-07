import resume from "../../../public/ajay-singh-resume.avif";
import Image from "next/image";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col-reverse md:flex-row justify-between gap-10">
        <div className="w-full md:w-1/2 px-6 text-center md:text-left">
          <p>Fast. Easy. Effective.</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Zety. The Best CV Maker Online.
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Whether you want to build a new CV from scratch or improve an
            existing one, let Zety help you present your work life, personality,
            and skills on a CV that stands out.
          </p>
          <Link
            href="/templates"
            className="text-white bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900"
          >
            Create new CV
          </Link>
          <Link
            href="#get-started"
            className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            Improve my CV
          </Link>
        </div>

        <div className="w-full md:w-1/2">
          <div className="relative h-96 w-full">
            <Image
              src={resume}
              alt="Hero image"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
