"use client";

import MyChatbotComponent from "@/components/Main/MyChatbotComponent";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const MyChatbots = () => {
  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (!storedData) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <MyChatbotComponent />
    </>
  );
};

export default MyChatbots;
