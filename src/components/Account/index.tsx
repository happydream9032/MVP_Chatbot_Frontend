"use client";
import axios from "axios";
import Link from "next/link";
import OfferList from "../Pricing/OfferList";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GoogleLogout } from "react-google-login";

const AccountComponent = () => {
  const router = useRouter();
  const [logintype, setLoginType] = useState("");
  const [email, setEmail] = useState("");
  const handleLogoutSuccess = () => {
    // Perform any necessary logout operations
    try {
      localStorage.removeItem("userdata");
      localStorage.removeItem("logintype");
      toast.success("Sign out", { position: "top-right" });
      router.push("/signin");
      // Redirect the user to the login page or perform any other necessary actions
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };
  const onSignOutSubmit = () => {
    localStorage.removeItem("userdata");
    localStorage.removeItem("logintype");
    toast.success("Sign out", { position: "top-right" });
    router.push("/signin");
  };

  useEffect(() => {
    const storedData = localStorage.getItem("userdata");
    if (!storedData) {
      router.push("/signin");
    } else {
      let data = JSON.parse(storedData);
      setEmail(data.email);
    }
    const logintypeData = localStorage.getItem("logintype");
    if (logintypeData == "1") {
      setLoginType("1");
    } else if (logintypeData == "0") {
      setLoginType("0");
    }
  }, []);

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  const handleDeleteUser = () => {
    try {
      const userdata = {
        email: email,
      };

      const apiUrl = process.env.NEXT_PUBLIC_API_BASE_URL + "/user/deleteuser";
      axios
        .post(apiUrl, userdata)
        .then((response) => {
          if (response.data.status == 200) {
            localStorage.removeItem("userdata");
            localStorage.removeItem("logintype");
            toast.success("Deleting Successful!", { position: "top-right" });
            router.push("/signin");
          }
        })
        .catch((error) => {
          toast.error("Deleting Failure!", { position: "top-right" });
          // Handle the error
        });
    } catch (err) {
      console.error("failure", err);
    }
  };

  return (
    <section
      id="account"
      className="lg:py-28bg-white relative z-10 overflow-hidden py-16 dark:bg-black md:py-20"
    >
      <div className="container">
        <ToastContainer />
        <div className="py-16 sm:py-24">
          <div className="mb-3">
            <div className="flex w-full flex-col justify-center">
              <h1 className="mb-2 text-center font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-normal md:text-5xl md:leading-normal">
                Account
              </h1>
              <div className="p m-auto w-full max-w-3xl border border-zinc-300">
                <div className="p-5">
                  <div className="w-full">
                    <h2 className="mb-8 text-left text-2xl font-semibold leading-5 text-black dark:text-white ">
                      Your Plan
                    </h2>
                    <h2 className="text-1xl mb-4 text-left font-semibold leading-5 text-black dark:text-white ">
                      You are on the free plan
                    </h2>
                    <div>
                      <OfferList text="30 message credits/month" />
                      <OfferList text="1 chatbot" />
                      <OfferList text="400,000 characters/chatbot" />
                      <OfferList text="View conversation history" />
                      <OfferList text="Capture leads" />
                      <OfferList text="Chatbots get deleted after 7 days of inactivity" />
                      <OfferList text="Pro Lite Plan" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="p m-auto mb-8 w-full max-w-3xl border border-zinc-300 bg-zinc-100 p-4 text-zinc-500">
                <div className="md:items-right flex justify-end md:flex">
                  <button
                    data-variant="flat"
                    className="hover:bg-blue-700 sm-3 w-30 rounded-md bg-primary py-2 px-4 text-white"
                  >
                    <Link href="/pricing">Upgrade Plan</Link>
                  </button>
                </div>
              </div>
              <div className="p m-auto mb-5 w-full max-w-3xl border border-zinc-300">
                <div className="p-5">
                  <div className="w-full">
                    <h2 className="mb-8 text-left text-2xl font-semibold leading-5 text-black dark:text-white">
                      Usage
                    </h2>
                    <p className="mb-4 text-left text-black dark:text-white">
                      Messages consumed: 1/30
                    </p>
                    <p className="text-left text-black dark:text-white">
                      Your credits renew at the start of every calendar month.
                      Next renewal: October 1st
                    </p>
                  </div>
                </div>
              </div>
              <div className="p m-auto mb-5 w-full max-w-3xl border border-zinc-300">
                <div className="p-5">
                  <div className="w-full">
                    <h2 className="mb-8 text-left text-2xl font-semibold leading-5 text-black dark:text-white ">
                      Your Email
                    </h2>
                    <p className="mb-2 text-left text-black dark:text-white">
                      {email}
                    </p>
                    <div className="md:items-right flex justify-end md:flex">
                      <button
                        data-variant="flat"
                        className="hover:bg-blue-700 sm-3 w-30 rounded-md bg-primary py-2 px-4 text-white"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p m-auto mb-7 w-full max-w-3xl border border-zinc-300">
                <div className="p-5">
                  <div className="w-full">
                    <h2 className="mb-8 text-left text-2xl font-semibold leading-5 text-black dark:text-white ">
                      Chatbase API Key
                    </h2>
                    <p className="mb-4 text-left text-gray-500 dark:text-gray-100">
                      Subscription required to get an API key.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-5 flex w-full justify-center">
                {logintype === "1" ? (
                  <GoogleLogout
                    clientId={process.env.NEXT_PUBLIC_CLIENT_ID}
                    buttonText="Logout"
                    onLogoutSuccess={handleLogoutSuccess}
                  />
                ) : (
                  <button
                    data-variant="flat"
                    className="hover:bg-blue-700 sm-3 w-30 rounded-md bg-primary py-2 px-4 text-white"
                    onClick={() => {
                      onSignOutSubmit();
                    }}
                  >
                    Sign Out
                  </button>
                )}
              </div>
              <div className="p relative m-auto mb-7 inline-flex w-full max-w-3xl items-center justify-center">
                <hr className="my-3 h-px w-full border-0 bg-black dark:bg-white"></hr>
                <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform bg-white text-black dark:bg-black dark:text-white">
                  &nbsp;Danger Zone&nbsp;
                </p>
              </div>
              <div className="mb-5 flex w-full justify-center">
                <button
                  data-variant="flat"
                  className="hover:bg-blue-700 sm-3 w-40 rounded-md bg-black py-2 px-4 text-white dark:bg-gray-100 dark:text-black"
                  onClick={() => {
                    handleDeleteUser();
                  }}
                >
                  Delete Account
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default AccountComponent;
