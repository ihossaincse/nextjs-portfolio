import Head from "next/head";
import Bar from "../components/Bar";
import { languages, tools } from "../data";

const resume = () => {
  return (
    <div className="px-4">
      <Head>
        <title>Next.js Portfolio - Resume</title>
        <meta name="description" content="Next.js Portfolio - Resume" />
      </Head>
      <div>
        <div className="px-6 py-2">
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold">Education</h5>
              <div className="">
                <h5 className="my-2 text-xl font-bold">
                  Computer Science Engineering
                </h5>
                <p className="font-semibold">Lorem ipsum dolor</p>
                <p className="my-3">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </div>
            </div>
            <div>
              <h5 className="my-3 text-2xl font-bold">Experience</h5>
              <div className="">
                <h5 className="my-2 text-xl font-bold">Software Developer</h5>
                <p className="font-semibold">Lorem ipsum</p>
                <p className="my-3">
                  Lorem ipsum is placeholder text commonly used in the graphic,
                  print, and publishing industries for previewing layouts and
                  visual mockups.
                </p>
              </div>
            </div>
          </div>

          <div className="grid gap-9 md:grid-cols-2">
            <div>
              <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
              <div className="my-2">
                {languages.map((language, i) => (
                  <Bar value={language} key={i} />
                ))}
              </div>
            </div>

            <div>
              <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
              <div className="my-2">
                {tools.map((tool, i) => (
                  <Bar value={tool} key={i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default resume;
