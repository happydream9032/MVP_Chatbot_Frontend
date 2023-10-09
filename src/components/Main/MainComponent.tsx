"use client";

import Link from "next/link";
import { Inter } from "@next/font/google";
import React, { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function MainComponent() {
  const handleInput = (textlist) => {
    setTextNumber(textlist.length);
    setTrainData(textlist);
  };
  const [textnumber, setTextNumber] = useState(0);
  const [botname, setBotName] = useState("");
  const [traindata, setTrainData] = useState("");
  return (
    <>
      <main id="skip">
        <section
          id="newchatbot"
          className="lg:py-28bg-white relative z-10 overflow-hidden py-16 dark:bg-black md:py-20"
        >
          <div className="container">
            <div className="py-16 sm:py-24">
              <div className="mb-3">
                <div className="flex w-full flex-col justify-center">
                  <h2 className="text-md text-center font-semibold leading-5 text-gray-900 dark:text-white">
                    Custom ChatGPT for your data
                  </h2>
                  <br />
                  <h2 className="text-md text-center font-semibold leading-5 text-gray-900 dark:text-white">
                    Just connect your data sources and get a ChatGPT-like
                    chatbot for your data.
                  </h2>
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
                                rows={20}
                                value={traindata}
                                onChange={(text) => {
                                  handleInput(text.currentTarget.value);
                                }}
                                className="my-2 w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                              ></textarea>
                              <p className="h-8 text-center text-sm text-gray-600"></p>
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
                                Create Chatbot
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
          <div className="absolute left-0 top-0 z-[-1]">
            <svg
              width="1440"
              height="969"
              viewBox="0 0 1440 969"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <mask
                id="mask0_95:1005"
                style={{ maskType: "alpha" }}
                maskUnits="userSpaceOnUse"
                x="0"
                y="0"
                width="1440"
                height="969"
              >
                <rect width="1440" height="969" fill="#090E34" />
              </mask>
              <g mask="url(#mask0_95:1005)">
                <path
                  opacity="0.1"
                  d="M1086.96 297.978L632.959 554.978L935.625 535.926L1086.96 297.978Z"
                  fill="url(#paint0_linear_95:1005)"
                />
                <path
                  opacity="0.1"
                  d="M1324.5 755.5L1450 687V886.5L1324.5 967.5L-10 288L1324.5 755.5Z"
                  fill="url(#paint1_linear_95:1005)"
                />
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_95:1005"
                  x1="1178.4"
                  y1="151.853"
                  x2="780.959"
                  y2="453.581"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_95:1005"
                  x1="160.5"
                  y1="220"
                  x2="1099.45"
                  y2="1192.04"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#4A6CF7" />
                  <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </section>
      </main>
    </>
  );
}
