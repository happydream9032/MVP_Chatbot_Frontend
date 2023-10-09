"use client";

import Link from "next/link";
import React, { useState } from "react";

const UpdateDataComponent = ({ id }) => {
  const [chatbotid, setChatbotID] = useState(id);
  const handleInput = (textlist) => {
    setTextNumber(textlist.length);
    setTrainData(textlist);
  };
  const [textnumber, setTextNumber] = useState(0);
  const [botname, setBotName] = useState("");
  const [traindata, setTrainData] = useState("");
  return (
    <>
      <section
        id="updatedata"
        className="relative z-10 py-16 dark:bg-black md:py-20 lg:py-28"
      >
        <div className="container">
          <div className="py-16 sm:py-24">
            <div className="mb-3">
              <div className="borde flex w-full flex-col justify-center">
                <h1 className="mb-2 text-center font-bold leading-tight text-black dark:text-white sm:text-2xl sm:leading-normal md:text-3xl md:leading-normal">
                  Project Title:
                </h1>
              </div>
              <div className="borde flex w-full justify-center">
                <div className="mb-4 md:flex md:items-center">
                  <ul className="block lg:flex lg:space-x-12">
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href={"/chatbox/" + chatbotid}
                      >
                        Chatbot
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href={"/chatbox/" + chatbotid + "/settings/general"}
                      >
                        Setting
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/dashboardbox"
                      >
                        Dashboard
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/sourcebox"
                      >
                        Source
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/integrationbox"
                      >
                        Integration
                      </Link>
                      <span className="dark:bg-purple-900 dark:text-purple-300  ml-1 mr-2 rounded-full bg-violet-700 px-2.5 py-0.5 text-xs font-medium text-white">
                        New
                      </span>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/embedbox"
                      >
                        Embed on site
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/sharebox"
                      >
                        Share
                      </Link>
                    </li>
                    <li className="group relative">
                      <Link
                        className="flex py-2 text-base text-dark group-hover:opacity-70 dark:text-white lg:mr-0 lg:inline-flex lg:py-4 lg:px-0"
                        href="/deletebox"
                      >
                        Delete
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="px-4 lg:mx-auto  lg:max-w-7xl">
              <div className="gap-8">
                <div className="col-span-12 sm:col-span-6 lg:col-span-10">
                  <div className="flex flex-col justify-center align-top lg:flex-row lg:space-x-8 lg:align-middle">
                    <div className="max-w-2xl lg:w-4/6">
                      <div className="mb-10 rounded border border-gray-200">
                        <div className="border-b border-gray-200 bg-white py-4 px-5">
                          <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                            Text
                          </h3>
                        </div>
                        <div className="p-5">
                          <div className="w-full">
                            <h4 className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                              Bot Name:
                            </h4>
                            <input
                              aria-label="label for the select"
                              type="text"
                              value={botname}
                              onChange={(e) => {
                                setBotName(e.currentTarget.value);
                              }}
                              placeholder="Input name of chatbot"
                              name="name"
                              className="mb-4 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                            ></input>
                            <h4 className="text-md font-semibold leading-6 text-gray-900 dark:text-white">
                              Train Data:
                            </h4>
                            <textarea
                              placeholder="Input your text data."
                              name="data"
                              value={traindata}
                              rows={20}
                              onChange={(text) => {
                                handleInput(text.currentTarget.value);
                              }}
                              className="my-2 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                            ></textarea>
                            <p className="h-8 text-center text-sm text-gray-600">
                              {textnumber} &nbsp;Characters
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="m-auto w-full lg:my-0 lg:w-2/6">
                      <div className=" rounded border p-4">
                        <div className="text-center font-semibold lg:mb-2">
                          Source
                        </div>
                        <span className="justify-left flex">
                          <span className="font-bold">{textnumber}</span>
                          <span className=" text-zinc-500">
                            &nbsp;text input chars
                          </span>
                        </span>
                        <div className="mb-4 flex flex-col space-y-2"></div>
                        <p className=" mb-4 flex flex-col text-sm">
                          <span className="font-semibold">
                            Total detected characters
                          </span>
                          <span className="flex justify-center">
                            <span className="font-bold">{textnumber}</span>
                            <span className=" text-zinc-500">
                              / 400,000 limit
                            </span>
                          </span>
                        </p>
                        <div className="mb-1 flex justify-center sm:flex-row sm:space-x-4">
                          <button
                            data-variant="flat"
                            className="hover:bg-blue-700 mt-4 w-full rounded-md bg-primary py-2 px-4 text-white"
                            type="submit"
                          >
                            <Link href="/chatbox/123newbot">
                              Retrain Chatbot
                            </Link>
                          </button>
                        </div>
                        <div className="flex w-full justify-center rounded-full bg-gray-200 dark:bg-gray-700">
                          <div
                            className="bg-blue-600 text-blue-100 rounded-full p-0.5 text-center text-xs font-medium leading-none"
                            style={{ width: "45%" }}
                          >
                            45%
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpdateDataComponent;
