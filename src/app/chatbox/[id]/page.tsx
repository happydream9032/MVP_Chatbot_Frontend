"use client";

import ChatBot from "@/components/ChatBox/ChatBotComponent";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
const ChatBox = ({ params }: { params: { id: string } }) => {
  const chatbot_id = params.id;

  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (!storedData) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <ChatBot id={chatbot_id} />
    </>
  );
};

export default ChatBox;
