"use client";
import Link from "next/link";
import React, { useState } from "react";

const SettingGeneralComponent = ({ id }) => {
  const [chatbotid, setChatbotID] = useState(id);
  return (
    <>
      <section
        id="general"
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
            <div className="px-4 lg:mx-auto lg:max-w-7xl">
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 sm:col-span-4 lg:col-span-2">
                  <div className="hidden grow flex-col gap-y-5 overflow-y-auto border-gray-200 bg-white dark:bg-black sm:flex">
                    <nav className="flex flex-1 flex-col">
                      <ul role="list" className="flex flex-1 flex-col">
                        <li>
                          <ul role="list" className="space-y-1">
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
                                  ></path>
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" +
                                    chatbotid +
                                    "/settings/general"
                                  }
                                >
                                  General
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" + chatbotid + "/settings/model"
                                  }
                                >
                                  Model
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" +
                                    chatbotid +
                                    "/settings/chat-interface"
                                  }
                                >
                                  Chat Interface
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6  text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" +
                                    chatbotid +
                                    "/settings/security"
                                  }
                                >
                                  Security
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" + chatbotid + "/settings/leads"
                                  }
                                >
                                  Leads
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" +
                                    chatbotid +
                                    "/settings/notifications"
                                  }
                                >
                                  Notifications
                                </Link>
                              </button>
                            </li>
                            <li>
                              <button className="text-md group flex w-full gap-x-3 whitespace-nowrap rounded-md p-2 font-semibold leading-6 text-gray-700  hover:text-violet-600">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                                  ></path>
                                </svg>
                                <Link
                                  href={
                                    "/chatbox/" +
                                    chatbotid +
                                    "/settings/domains"
                                  }
                                >
                                  Domains
                                </Link>
                              </button>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    </nav>
                  </div>
                </div>
                <div className="col-span-12 sm:col-span-8 lg:col-span-10">
                  <div className="w-full">
                    <div className="mb-10 rounded border border-gray-200">
                      <div className="border-b border-gray-200 bg-white py-4 px-5">
                        <h3 className="text-xl font-semibold leading-6 text-gray-900 ">
                          General
                        </h3>
                      </div>
                      <div className="p-5">
                        <div className="w-full">
                          <div className="pb-8">
                            <p className="text-md h-10 text-left text-black dark:text-white">
                              Chatbot ID
                            </p>
                            <div className="mt-1 flex items-center space-x-4">
                              <div className="font-semibold">{chatbotid}</div>
                              <button
                                aria-label="label for the select"
                                className="dark:bg- h-7 w-7 rounded-lg border border-zinc-900/10 p-1 text-gray-800 hover:bg-gray-200"
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  aria-hidden="true"
                                  className=""
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"
                                  ></path>
                                </svg>
                              </button>
                            </div>
                          </div>
                          <div className="pb-8">
                            <label className="block text-sm font-medium text-black dark:text-white">
                              Number of characters
                            </label>
                            <div className="mt-1 font-semibold">3495</div>
                          </div>
                          <div>
                            <label className="block text-sm font-medium text-black dark:text-white">
                              Name
                            </label>
                            <div className="mt-1">
                              <input
                                aria-label="label for the select"
                                type="text"
                                name="name"
                                className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                              ></input>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end bg-gray-100 px-5 py-3">
                        <button
                          data-variant="flat"
                          className="inline-flex h-7 w-16 transform-none cursor-not-allowed items-center justify-center rounded border border-zinc-600 bg-zinc-700 text-center font-semibold normal-case leading-6 text-zinc-200 shadow-sm transition duration-150 ease-in-out hover:cursor-not-allowed hover:border-zinc-600 hover:bg-zinc-700 hover:text-zinc-200 focus:outline-none focus:ring-2 focus:ring-opacity-50"
                          disabled={true}
                        >
                          SAVE
                        </button>
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
export default SettingGeneralComponent;
