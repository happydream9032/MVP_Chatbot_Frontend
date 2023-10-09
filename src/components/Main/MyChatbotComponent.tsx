"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const MyChatbotComponent = () => {
  const [botcount, setBotCount] = useState(0);
  const [chatbots, setChatBots] = useState([]);

  const initial_settings = () => {
    const newMsgData = [...chatbots, { id: "23423534", name: "MVP Chatbot" }];
    setChatBots(newMsgData);
    setBotCount(newMsgData.length);
  };

  useEffect(() => {
    initial_settings();
  }, []);

  return (
    <>
      <section
        id="mychatbots"
        className="lg:py-28bg-white relative z-10 overflow-hidden py-16 dark:bg-black md:py-20"
      >
        <div className="container">
          <div className="py-16 sm:py-24">
            <div className="m-auto flex w-full max-w-3xl items-center justify-between px-4 pb-5">
              <div className="flex w-full flex-col justify-center">
                <h1 className=" text-2xl font-extrabold text-black dark:text-white md:text-3xl">
                  MyChatbots
                </h1>
                <p className="text-sm font-normal">
                  (<span>{botcount}</span> chatbots limit)
                </p>
              </div>
              <div className="flex justify-center">
                <button className="inline-flex items-center justify-center rounded-md border border-transparent bg-primary py-1 px-2 text-sm font-medium text-white shadow-sm hover:bg-zinc-500 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto">
                  <Link href="/">New Chatbot</Link>
                </button>
              </div>
            </div>
            <div className="py-4">
              <div className="m-auto my-8 grid w-full max-w-3xl grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4">
                {chatbots.map((item, index) => (
                  <div key={index}>
                    <div className="flex items-center justify-center">
                      <Link href={"/chatbox/" + item.id}>
                        <div className=" relative flex w-40 flex-col justify-between overflow-hidden rounded border">
                          <img
                            alt="📌 Project Title: ChatPag... thumbnail"
                            src="https://backend.chatbase.co/storage/v1/object/public/chatbase/chatbot-placeholder.png?width=640&amp;quality=50"
                            width={200}
                            height={200}
                            decoding="async"
                            data-nimg={1}
                            className="h-40 w-40 border-none object-cover"
                            loading="lazy"
                            style={{
                              color: "transparent",
                              visibility: "visible",
                            }}
                            data-xblocker="passed"
                          />
                          <div className=" flex h-14 items-center justify-center px-1">
                            <h3 className="m-auto overflow-hidden text-center text-xs font-semibold md:text-sm">
                              {item.name}
                            </h3>
                          </div>
                        </div>
                      </Link>
                    </div>
                  </div>
                ))}
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
    </>
  );
};

export default MyChatbotComponent;
