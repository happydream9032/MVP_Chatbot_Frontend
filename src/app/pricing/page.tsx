"use client";

import PricingComponent from "@/components/Pricing";
import SigninComponent from "@/components/Auth/SigninComponent";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Pricing = () => {
  const router = useRouter();
  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (!storedData) {
      router.push("/signin");
    }
  }, []);
  return (
    <>
      <PricingComponent />
    </>
  );
};

export default Pricing;
