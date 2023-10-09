"use client";
import Link from "next/link";
import React, { useState, useRef } from "react";

const ChatInterfaceComponent = ({ id }) => {
  const inputRef = useRef(null);
  const [chatbotid, setChatbotID] = useState(id);
  const [initmessage, setInitMessage] = useState([
    "Hi! What can I help you with?",
  ]);
  const [inittextmessage, setInitTextMessage] = useState(
    "Hi! What can I help you with?"
  );
  const [suggestionmessage, setSuggestionMessage] = useState("");
  const [suggestionmessagearray, setSuggestionMessageArray] = useState([]);
  const [displayname, setDisplayName] = useState("");
  const [botprofilepic, setBotProfilePic] = useState("");
  const [removeprofilepic, setRemoveProfilePic] = useState(false);
  const [messagecolor, setMessageColor] = useState("#6590D5");
  const [messagergbcolor, setMessageRGBColor] = useState(["101", "144", "213"]);
  //const [messagecolortext, setMessageColorText] = useState("bg-[#6590D5]");
  const [chaticon, setChatIcon] = useState("");
  const [removechaticon, setRemoveChatIcon] = useState(false);
  const [bubblebtncolor, setBubbleBtnColor] = useState("#000000");
  const [bubblebtnrgbcolor, setBubbleBtnRGBColor] = useState(["0", "0", "0"]);
  //const [bubblebtncolorText, setBubbleBtnColorText] = useState("bg-[#000000]");
  const [step, setStep] = useState("0");
  const [alignbtn, setAlignBtn] = useState("right");
  const [theme, setTheme] = useState("light");

  const converthextorgb = (hex) => {
    hex = hex.replace("#", "");
    const rgb = [];
    // Convert the 6-digit hexadecimal color to RGB values
    let r = parseInt(hex.substring(0, 2), 16);
    let g = parseInt(hex.substring(2, 4), 16);
    let b = parseInt(hex.substring(4, 6), 16);

    rgb.push(r);
    rgb.push(g);
    rgb.push(b);

    return rgb;
  };

  const onResetInitMessage = () => {
    setInitMessage(["Hi! What can I help you with?"]);
  };
  const onResetUserMessageColor = () => {
    //setMessageColorText("bg-[#6590D5]");
    let rgbcolor = converthextorgb("#6590D5");
    setMessageColor("#6590D5");
    setMessageRGBColor(rgbcolor);
  };
  const onResetBubbleBtnColor = () => {
    //setBubbleBtnColorText("bg-[#000000]");
    let rgbcolor = converthextorgb("#000000");
    setBubbleBtnColor("#000000");
    setBubbleBtnRGBColor(rgbcolor);
  };

  const onSetMessageColor = (hex) => {
    let rgbcolor = converthextorgb(hex);
    setMessageColor(hex);
    setMessageRGBColor(rgbcolor);
  };

  const onSetBubbleBtnColor = (hex) => {
    let rgbcolor = converthextorgb(hex);
    setBubbleBtnColor(hex);
    setBubbleBtnRGBColor(rgbcolor);
  };
  const onSetInitMessage = (text) => {
    setInitTextMessage(text);
    let init_text_array = text.split("\n");
    setInitMessage(init_text_array);
  };
  const onSetSuggestMessage = (text) => {
    setSuggestionMessage(text);
    let suggest_text_array = text.split("\n");
    setSuggestionMessageArray(suggest_text_array);
  };
  return (
    <>
      <section
        id="chat-interface"
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
                                  className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-violet-600"
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
                                  className="h-6 w-6 shrink-0 text-violet-600"
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
                          Chat Interface
                        </h3>
                      </div>
                      <div className="p-5">
                        <div className="w-full">
                          <div className="pb-8">
                            <p className="text-md h-10 text-left text-black dark:text-white">
                              Note: Applies when embedded on a website
                            </p>
                          </div>
                          <div className=" flex flex-col justify-between lg:flex-row lg:space-x-8">
                            <div className="w-2/2 flex-1 pb-5 lg:w-1/2">
                              <div className="pb-8">
                                <div className="flex justify-between">
                                  <label className="text-md block font-medium text-gray-700">
                                    Initial Message:
                                  </label>
                                  <button
                                    onClick={() => {
                                      onResetInitMessage();
                                    }}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                  >
                                    Reset
                                  </button>
                                </div>
                                <div className="mt-3">
                                  <textarea
                                    name="initial_messages"
                                    aria-label="init_message"
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    maxLength={1000}
                                    value={inittextmessage}
                                    onChange={(text) => {
                                      onSetInitMessage(text.target.value);
                                    }}
                                  >
                                    Hi! What can I help you with?
                                  </textarea>
                                  <p className="mt-2 text-sm text-zinc-500">
                                    Enter each message in a new line.
                                  </p>
                                </div>
                              </div>
                              <div className="pb-8">
                                <label className="text-md block font-medium text-gray-700">
                                  Suggested Messages:
                                </label>
                                <div className="mt-3">
                                  <textarea
                                    name="suggestion_messages"
                                    placeholder="What is example.com?"
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                    maxLength={1000}
                                    value={suggestionmessage}
                                    onChange={(text) => {
                                      onSetSuggestMessage(text.target.value);
                                    }}
                                  ></textarea>
                                  <p className="mt-2 text-sm text-zinc-500">
                                    Enter each message in a new line.
                                  </p>
                                </div>
                              </div>
                              <div className="pb-8">
                                <label className="text-md block font-medium text-gray-700">
                                  Theme:
                                </label>
                                <div className="mt-2">
                                  <select
                                    id="theme"
                                    name="theme"
                                    value={theme}
                                    onChange={(e) => {
                                      setTheme(e.target.value);
                                    }}
                                    aria-label="label for the select"
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                  >
                                    <option value="light">light</option>
                                    <option value="dark">dark</option>
                                  </select>
                                </div>
                              </div>
                              <div className="pb-8">
                                <label className="text-md block font-medium text-gray-700">
                                  Update chatbot profile picture:
                                </label>
                                <div className="mt-2">
                                  <input
                                    id="bot_profile_picture"
                                    aria-label="label for the select"
                                    type="file"
                                    accept="image/*"
                                    name="bot_profile_picture"
                                    value={botprofilepic}
                                    onChange={(text) => {
                                      setBotProfilePic(text.target.value);
                                    }}
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                  ></input>
                                  <label className="text-red-700 block text-sm font-medium"></label>
                                </div>
                              </div>
                              <div className="pb-8">
                                <label className="text-md mb-1 block font-medium text-gray-700">
                                  Remove Chatbot Profile Picture:
                                </label>
                                <input
                                  type="checkbox"
                                  aria-label="label for the select"
                                  name="should_remove_bot_profile_picture"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                                  checked={removeprofilepic}
                                  onChange={() => {
                                    setRemoveProfilePic(!removeprofilepic);
                                  }}
                                ></input>
                              </div>
                              <div className="pb-8">
                                <label className="text-md mb-1 block font-medium text-gray-700">
                                  Display name:
                                </label>
                                <input
                                  type="text"
                                  aria-label="label for the select"
                                  name="name"
                                  className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                  value={displayname}
                                  onChange={(text) => {
                                    setDisplayName(text.target.value);
                                  }}
                                ></input>
                              </div>
                              <div className="pb-8">
                                <div className="flex justify-between">
                                  <label className="text-md block font-medium text-gray-700">
                                    User Message Color:
                                  </label>
                                  <button
                                    onClick={() => {
                                      onResetUserMessageColor();
                                    }}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                  >
                                    Reset
                                  </button>
                                </div>
                                <input
                                  className="w-13 h-9"
                                  aria-label="label for the select"
                                  id="nativeColorPicker1"
                                  type="color"
                                  value={messagecolor}
                                  onChange={(e) => {
                                    onSetMessageColor(e.currentTarget.value);
                                  }}
                                />
                              </div>
                              <p className="pb-10 text-sm text-zinc-900">
                                **If the changes here don't show up immediately
                                on your website try clearing your browser cache
                                or use incognito. (New users will see the
                                changes immediately)**
                              </p>
                              <div className="pb-8">
                                <label className="text-md block font-medium text-gray-700">
                                  Update chat icon:
                                </label>
                                <div className="mt-2">
                                  <input
                                    ref={inputRef}
                                    id="chat_icon"
                                    aria-label="label for the select"
                                    type="file"
                                    accept="image/*"
                                    name="bot_profile_picture"
                                    value={chaticon}
                                    onChange={(e) => {
                                      alert(inputRef.current.files[0].path);
                                      setChatIcon(e.target.value);
                                    }}
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                  ></input>
                                  <label className="text-red-700 block text-sm font-medium"></label>
                                </div>
                              </div>
                              <div className="pb-8">
                                <label className="text-md mb-1 block font-medium text-gray-700">
                                  Remove chat icon:
                                </label>
                                <input
                                  type="checkbox"
                                  aria-label="label for the select"
                                  name="should_remove_bot_profile_picture"
                                  className="h-4 w-4 rounded border-gray-300 text-violet-600 focus:ring-violet-600"
                                  checked={removechaticon}
                                  onChange={() => {
                                    setRemoveChatIcon(!removechaticon);
                                  }}
                                ></input>
                              </div>
                              <div className="pb-8">
                                <div className="flex justify-between">
                                  <label className="text-md block font-medium text-gray-700">
                                    Chat Bubble Button Color:
                                  </label>
                                  <button
                                    onClick={() => {
                                      onResetBubbleBtnColor();
                                    }}
                                    className="inline-flex items-center justify-center rounded-md border border-transparent bg-zinc-200 py-1 px-2 text-sm font-medium text-black shadow-sm hover:bg-zinc-300 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:w-auto"
                                  >
                                    Reset
                                  </button>
                                </div>
                                <input
                                  className="w-13 h-9"
                                  aria-label="label for the select"
                                  id="nativeColorPicker2"
                                  type="color"
                                  value={bubblebtncolor}
                                  onChange={(e) => {
                                    onSetBubbleBtnColor(e.currentTarget.value);
                                  }}
                                />
                              </div>
                              <div className="pb-8">
                                <label className="text-md block font-medium text-gray-700">
                                  Align Chat Bubble Button:
                                </label>
                                <div className="mt-2">
                                  <select
                                    id="aligin_bubble"
                                    name="aligin_bubble"
                                    value={alignbtn}
                                    onChange={(e) => {
                                      console.log(e.target.value);
                                      setAlignBtn(e.target.value);
                                    }}
                                    aria-label="label for the select"
                                    className="w-full min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white p-1 px-3 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                  >
                                    <option value="right">right</option>
                                    <option value="left">left</option>
                                  </select>
                                </div>
                              </div>
                              <div className="mt-1 text-sm text-zinc-700">
                                <div className="flex flex-col justify-between lg:flex-row lg:space-x-10">
                                  <div className="flex w-2/3 pb-3 lg:w-2/3">
                                    Auto show initial messages pop-ups after
                                  </div>
                                  <div className="flex w-1/3 pb-3 lg:w-1/3">
                                    <input
                                      name="auto_open_chat_window_after"
                                      type="number"
                                      aria-label="label for the select"
                                      className="min-w-0 rounded-md border border-zinc-900/10 bg-white p-1 px-2 text-gray-900 placeholder:text-zinc-400 focus:border-violet-500 focus:outline-none focus:ring-4 focus:ring-violet-500/10 sm:text-sm"
                                      value={step}
                                      onChange={(e) => {
                                        setStep(e.target.value);
                                      }}
                                    ></input>
                                  </div>
                                </div>
                                seconds (negative to disable)
                              </div>
                            </div>
                            <div className="w-2/2 flex-1 lg:w-1/2">
                              <div
                                className={`mb-4 flex h-[38rem] flex-auto flex-shrink-0 flex-col overflow-hidden rounded border border-zinc-200 ${
                                  theme == "light" ? "bg-white" : "bg-black"
                                } `}
                              >
                                <div className="w-full">
                                  <div className="mb-4 flex justify-between border-b border-zinc-100 px-2">
                                    <div className="flex items-center">
                                      {botprofilepic ? (
                                        <div></div>
                                      ) : (
                                        <div></div>
                                      )}
                                      {displayname ? (
                                        <p
                                          className={`text-md ml-2 flex justify-start ${
                                            theme == "light"
                                              ? "text-black"
                                              : "text-white"
                                          }`}
                                        >
                                          {displayname}
                                        </p>
                                      ) : (
                                        <div></div>
                                      )}
                                    </div>
                                    <div className="flex items-center justify-center">
                                      <button
                                        className="py-3 text-sm  text-zinc-700 hover:text-zinc-600"
                                        aria-label="label for the select"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke={
                                            theme == "light"
                                              ? "#000000"
                                              : "#ffffff"
                                          }
                                          aria-hidden="true"
                                          className="h-5 w-5"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
                                          ></path>
                                        </svg>
                                      </button>
                                      <button
                                        className="ml-3 py-3 text-sm  text-zinc-700 hover:text-zinc-600"
                                        aria-label="label for the select"
                                      >
                                        <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          fill="none"
                                          viewBox="0 0 24 24"
                                          strokeWidth="1.5"
                                          stroke={
                                            theme == "light"
                                              ? "#000000"
                                              : "#ffffff"
                                          }
                                          aria-hidden="true"
                                          className="h-6 w-6"
                                        >
                                          <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                          ></path>
                                        </svg>
                                      </button>
                                    </div>
                                  </div>
                                </div>
                                <div className="h-full overflow-auto">
                                  <div className="react-scroll-to-bottom--css-suezx-79elbk h-full">
                                    <div className="react-scroll-to-bottom--css-suezx-1n7m0yu px-2">
                                      <div>
                                        {initmessage.map((item, index) => (
                                          <div
                                            key={index}
                                            className="mr-8 flex justify-start"
                                          >
                                            <div
                                              className={`mb-3 max-w-prose overflow-auto rounded-lg ${
                                                theme == "light"
                                                  ? "bg-gray-200 py-3 px-5 text-black"
                                                  : "bg-gray-600 py-3 px-5 text-white"
                                              } `}
                                            >
                                              <div className="flex flex-col items-start gap-4 break-words">
                                                <div className="prose text-inherit dark:prose-invert w-full break-words text-left ">
                                                  <p>{item}</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ))}
                                        {theme == "lignt" ? (
                                          <div className="ml-8 flex justify-end">
                                            <div
                                              className={`mb-3 max-w-prose overflow-auto rounded-lg py-3 px-5 ${
                                                parseInt(messagergbcolor[0]) <
                                                  150 &&
                                                parseInt(messagergbcolor[1]) <
                                                  150 &&
                                                parseInt(messagergbcolor[2]) <
                                                  150
                                                  ? "text-white"
                                                  : "text-black dark:text-white"
                                              }`}
                                              style={{
                                                backgroundColor: `rgb(${messagergbcolor[0]},${messagergbcolor[1]},${messagergbcolor[2]})`,
                                              }}
                                            >
                                              <div className="flex flex-col items-start gap-4 break-words">
                                                <div className="prose text-inherit dark:prose-invert w-full break-words text-left ">
                                                  <p>Hi!</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        ) : (
                                          <div className="ml-8 flex justify-end">
                                            <div
                                              className={`mb-3 max-w-prose overflow-auto rounded-lg py-3 px-5 ${
                                                parseInt(messagergbcolor[0]) <
                                                  150 &&
                                                parseInt(messagergbcolor[1]) <
                                                  150 &&
                                                parseInt(messagergbcolor[2]) <
                                                  150
                                                  ? "text-white"
                                                  : "text-black dark:text-white"
                                              }`}
                                              style={{
                                                backgroundColor: `rgb(${messagergbcolor[0]},${messagergbcolor[1]},${messagergbcolor[2]})`,
                                              }}
                                            >
                                              <div className="flex flex-col items-start gap-4 break-words">
                                                <div className="prose text-inherit dark:prose-invert w-full break-words text-left ">
                                                  <p>Hi!</p>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="clear-both px-2 pb-2">
                                  <div className="flex flex-wrap justify-start">
                                    {suggestionmessagearray.map((item, index) =>
                                      item != "" ? (
                                        <div key={index} className="">
                                          {suggestionmessage ? (
                                            <button
                                              aria-label="button"
                                              className={`mr-1 mt-1 whitespace-nowrap rounded-xl  py-2 px-3 text-sm hover:bg-zinc-200 ${
                                                theme == "light"
                                                  ? "bg-gray-200 text-black hover:bg-gray-300"
                                                  : "bg-gray-500 text-white hover:bg-gray-600"
                                              }`}
                                            >
                                              {item}
                                            </button>
                                          ) : (
                                            <div></div>
                                          )}
                                        </div>
                                      ) : (
                                        <div key={index}></div>
                                      )
                                    )}
                                  </div>

                                  {theme == "light" ? (
                                    <div className="flex rounded border border-gray-400 px-2">
                                      <input
                                        type="text"
                                        aria-label="chat input"
                                        className=" bg-inherit min-w-0 flex-1 appearance-none rounded-md focus:outline-none sm:text-sm"
                                      ></input>
                                      <div>
                                        <button
                                          type="submit"
                                          aria-label="chat input"
                                          className="flex-none p-2"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                          >
                                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  ) : (
                                    <div className="flex rounded border border-white bg-black px-2">
                                      <input
                                        type="text"
                                        aria-label="chat input"
                                        className=" min-w-0 flex-1 appearance-none rounded-md border-white bg-black text-white caret-white focus:outline-none sm:text-sm"
                                      ></input>
                                      <div>
                                        <button
                                          aria-label="text"
                                          type="submit"
                                          className="flex-none p-2"
                                        >
                                          <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="#ffffff"
                                            aria-hidden="true"
                                            className="h-5 w-5"
                                          >
                                            <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"></path>
                                          </svg>
                                        </button>
                                      </div>
                                    </div>
                                  )}
                                </div>
                              </div>
                              {alignbtn === "right" ? (
                                <div className="flex justify-end pb-12">
                                  <div
                                    className={`rounded-full p-3`}
                                    style={{
                                      backgroundColor: `rgb(${bubblebtnrgbcolor[0]},${bubblebtnrgbcolor[1]},${bubblebtnrgbcolor[2]})`,
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="2.3"
                                      stroke="white"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              ) : (
                                <div className="flex justify-start pb-12">
                                  <div
                                    className={`rounded-full p-3`}
                                    style={{
                                      backgroundColor: `rgb(${bubblebtnrgbcolor[0]},${bubblebtnrgbcolor[1]},${bubblebtnrgbcolor[2]})`,
                                    }}
                                  >
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      strokeWidth="2.3"
                                      stroke="white"
                                      width="24"
                                      height="24"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 011.037-.443 48.282 48.282 0 005.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                                      ></path>
                                    </svg>
                                  </div>
                                </div>
                              )}
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
        </div>
      </section>
    </>
  );
};
export default ChatInterfaceComponent;
