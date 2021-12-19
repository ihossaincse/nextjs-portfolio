import Head from "next/head";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import ProjectsNavbar from "../components/ProjectsNavbar";
import { projects as projectsData } from "../data";
import { Category } from "../types";

const Projects = () => {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");

  const handlerFilterCategory = (category: Category | "all") => {
    if (category === "all") {
      setProjects(projectsData);
      setActive(category);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(category)
    );
    setProjects(newArray);
    setActive(category);
  };

  return (
    <div className="px-4">
      <Head>
        <title>Next.js Portfolio - Projects</title>
        <meta name="description" content="Next.js Portfolio - Projects" />
      </Head>
      <div>
        <div className="px-5 py-2 overflow-y-scroll" style={{ height: "65vh" }}>
          <ProjectsNavbar
            handlerFilterCategory={handlerFilterCategory}
            active={active}
          />

          <div className="relative grid grid-cols-12 gap-4 my-3">
            {projects.map((project, index) => (
              <div
                className="col-span-12 p-2 bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                key={index}
              >
                <ProjectCard project={project} key={project.name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
