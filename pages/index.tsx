import Head from "next/head";
import React from "react";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";

const index = () => {
  return (
    <div>
      <Head>
        <title>Next.js Portfolio</title>
        <meta name="description" content="Next.js Portfolio" />
      </Head>
      <div className="flex flex-col flex-grow px-6 pt-1 ">
        <h6 className="my-3 text-base font-medium">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </h6>
        <div
          className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <h4 className="my-3 text-xl font-semibold tracking-wide">
            What I am doing
          </h4>

          <div className="grid gap-6 my-3 md:grid-cols-2">
            {/* children's initial and animate property should be same as the parent during a stagger effect  */}
            {services.map((service) => (
              <div
                className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
                key={service.title}
              >
                <ServiceCard service={service} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
