import React, { useState } from "react";
export const Projects = () => {
  const data = [
    {
      id: 1,
      title: "Attendance Management System",
      content:
        "Multi tenant application in which mentors onboard by admin and add attendance to their students assigned by admin. Mentors can download the analytic of student attendance based on multiple filters. Server-side pagination to improve performance and reduce load on both server and client side.",
      glink: "",
      image: attendance,
    },
    {
      id: 2,
      title: "E.R.P - Inventory",
      content:
        "Multi tenant application in which staff onboard by admin and add attendance to their employees assigned by admin. Also manage and monitor the stock in the inventory Also admin can generate and download invoices for the trade transactions made. Server-side pagination to improve performance and reduce load on both server and client side.",
      image: erp,
    },
    {
      id: 3,
      title: "Game hub",
      content:
        "Users can Theme toggle- light and dark, User can navigate to different game genres and filter games according to game categories. Server-side Image optimisation enables increased performance of application Custom Hooks to make each component as pure components and reusable components",
      glink: "https://github.com/suresh-02/game-hub",
      image: gamehub,
    },
    {
      id: 4,
      title: "News App",
      content:
        "A webapplication which updates the news on daily basis. Sever side pagination is used to reduce the load on the local memory and optimized images are rendered. HTTP calls are handled using Angular HTTP services",
      glink: "https://github.com/suresh-02/game-hub",
      image: newsapp,
    },
    // More objects...
  ];
  console.log(data);

  return (
    <div>
      <h1 className="text-[#00fd9a] text-6xl font-bold pt-[30px] relative before:content-[''] before:absolute before:block] before:h-[2px]">
        Projects
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 py-[30px] px-[30px] gap-[50px] items-center justify-center">
        {data.map((da) => {
          return (
            <div className="" key={da}>
              <div class="  md:max-w-lg text-left min-h-[615px] bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                <a href="https://github.com/suresh-02/game-hub">
                  <img class="rounded-t-lg" src={da.image} />
                </a>
                <div class="p-5">
                  <h5 class="mb-2 text-2xl font-bold tracking-tight  text-[#eb5939]">
                    {da.title}
                    {/* {console.logda.id -da.title)} */}
                  </h5>
                  <h6 className="text-white font-bold ">Description</h6>
                  <p class="mb-3 font-normal text-[#B7AB98]">{da.content}</p>
                  <div className="mb-[0px]">
                    <a
                      href={da.glink}
                      class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Github
                      <svg
                        class="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
