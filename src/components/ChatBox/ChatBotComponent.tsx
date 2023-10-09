"use client";

import Link from "next/link";
import React, { useState } from "react";

const ChatBot = ({ id }) => {
  const [msgdata, setMsgData] = useState([]);
  const [textdata, setTextData] = useState("");
  const [chatbotid, setChatbotID] = useState(id);
  const clearMsgData = () => {
    setMsgData([]);
  };
  const handleSubmitInput = () => {
    const newMsgData = [...msgdata, { data: textdata, type: 0 }];
    setMsgData(newMsgData);
    setTextData("");
  };
  const handleMsgInput = (text: string) => {
    setTextData(text);
  };

  return (
    <>
      <section
        id="chatbot"
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
              <div className="flex h-[38rem] flex-auto flex-shrink-0 flex-col overflow-hidden border border-zinc-300 bg-white px-2 pt-2 dark:bg-black">
                <div className="mb-4 flex w-full justify-between border-b bg-white pb-2 dark:bg-black">
                  <div className="flex items-center"></div>
                  <button
                    aria-label="label for the select"
                    className="text-sm text-zinc-700 hover:text-zinc-600 "
                    onClick={() => {
                      clearMsgData();
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={"#000000"}
                      aria-hidden="true"
                      className="h-5 w-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M4.755 10.059a7.5 7.5 0 0112.548-3.364l1.903 1.903h-3.183a.75.75 0 100 1.5h4.992a.75.75 0 00.75-.75V4.356a.75.75 0 00-1.5 0v3.18l-1.9-1.9A9 9 0 003.306 9.67a.75.75 0 101.45.388zm15.408 3.352a.75.75 0 00-.919.53 7.5 7.5 0 01-12.548 3.364l-1.902-1.903h3.183a.75.75 0 000-1.5H2.984a.75.75 0 00-.75.75v4.992a.75.75 0 001.5 0v-3.18l1.9 1.9a9 9 0 0015.059-4.035.75.75 0 00-.53-.918z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="h-full overflow-auto">
                  <div className="react-scroll-to-bottom--css-kroxj-79elbk h-full">
                    <div className="react-scroll-to-bottom--css-kroxj-1n7m0yu pr-2">
                      {msgdata.map((item, index) =>
                        item.type === "1" ? (
                          <div key={index} className="mr-8 flex justify-start">
                            <div className="mb-3 overflow-auto rounded-lg  bg-gray-100 py-3 px-4 text-black">
                              <div className=" flex flex-col items-start gap-4 break-words">
                                <div className="prose text-inherit dark:prose-invert w-full break-words text-left ">
                                  <p>{item.data}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ) : (
                          <div key={index} className="mr-8 flex justify-end">
                            <div className="mb-3 overflow-auto rounded-lg  bg-[#3498db] py-3 px-4 text-white">
                              <div className=" flex flex-col items-end gap-4 break-words">
                                <div className="prose text-inherit dark:prose-invert w-full break-words text-right ">
                                  <p>{item.data}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div>
                  {/* <form> */}
                  <div className="py-1">
                    <div className="clear-both pb-1 text-xs font-light text-gray-600">
                      <p className="text-black dark:text-white">
                        28 message credits left
                      </p>
                    </div>
                  </div>
                  <div className="flex rounded border border-gray-300 bg-white p-1 pl-3">
                    <input
                      value={textdata}
                      type="text"
                      aria-label="chat input"
                      required={true}
                      maxLength={2000}
                      onChange={(text) => {
                        handleMsgInput(text.currentTarget.value);
                      }}
                      className="min-w-0 flex-auto appearance-none rounded-md bg-white text-gray-900 focus:outline-none sm:text-sm"
                    ></input>
                    <button
                      aria-label="label for the select"
                      type="submit"
                      className=" flex-none p-2"
                      onClick={() => {
                        handleSubmitInput();
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="grey-200"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                      </svg>
                    </button>
                  </div>
                  {/* </form> */}
                  <div className="pb-2 lg:pb-4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ChatBot;
