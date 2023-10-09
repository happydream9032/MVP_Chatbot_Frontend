"use client";

import OfferList from "./OfferList";
import PricingBox from "./PriceBox";
import ChatBot from "@/components/ChatBox/ChatBotComponent";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const PricingComponent = () => {
  const [isMonthly, setIsMonthly] = useState(true);
  const router = useRouter();
  return (
    <section id="pricing" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <div
          className="wow fadeInUp mb-8 flex justify-center md:mb-12 lg:mb-16"
          data-wow-delay=".1s"
        >
          <span
            onClick={() => setIsMonthly(true)}
            className={`${
              isMonthly
                ? "pointer-events-none text-primary"
                : "text-dark dark:text-white"
            } mr-4 cursor-pointer text-base font-semibold`}
          >
            Monthly
          </span>
          <div
            onClick={() => setIsMonthly(!isMonthly)}
            className="flex cursor-pointer items-center"
          >
            <div className="relative">
              <div className="h-5 w-14 rounded-full bg-[#1D2144] shadow-inner"></div>
              <div
                className={`${
                  isMonthly ? "" : "translate-x-full"
                } shadow-switch-1 absolute left-0 top-[-4px] flex h-7 w-7 items-center justify-center rounded-full bg-primary transition`}
              >
                <span className="active h-4 w-4 rounded-full bg-white"></span>
              </div>
            </div>
          </div>
          <span
            onClick={() => setIsMonthly(false)}
            className={`${
              isMonthly
                ? "text-dark dark:text-white"
                : "pointer-events-none text-primary"
            } ml-4 cursor-pointer text-base font-semibold`}
          >
            Yearly
          </span>
        </div>
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
          <PricingBox packageName="Free Plan" price="0" duration="">
            <OfferList text="30 message credits/month" />
            <OfferList text="1 chatbot" />
            <OfferList text="400,000 characters/chatbot" />
            <OfferList text="View conversation history" />
            <OfferList text="Capture leads" />
            <OfferList text="Chatbots get deleted after 7 days of inactivity" />
            <OfferList text="Pro Lite Plan" />
          </PricingBox>
          <PricingBox
            packageName="Pro Standard"
            price={isMonthly ? "19" : "199"}
            duration={isMonthly ? "mo" : "yr"}
          >
            <OfferList text="2,000 message credits/month" />
            <OfferList text="11,000,000 characters/chatbot" />
            <OfferList text="Custom Domains" />
            <OfferList text="No Branding" />
            <OfferList text="Pro Standard Plan" />
          </PricingBox>
          <PricingBox
            packageName="Pro Plus"
            price={isMonthly ? "99" : "990"}
            duration={isMonthly ? "mo" : "yr"}
          >
            <OfferList text="10,000 message credits/month" />
            <OfferList text="11,000,000 characters/chatbot" />
            <OfferList text="Custom Domains" />
            <OfferList text="No Branding" />
          </PricingBox>
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
  );
};

export default PricingComponent;
