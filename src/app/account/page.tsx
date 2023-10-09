"use client";
import AccountComponent from "@/components/Account";
import SigninComponent from "@/components/Auth/SigninComponent";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Account = () => {
  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (!storedData) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <AccountComponent />
    </>
  );
};
export default Account;
