"use client";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { Heading } from "@/components/typography/Heading";
import { BodyBase } from "@/components/typography/BodyBase";
import Button from "@/components/Button";
import Image from "next/image";

const Page = () => {
  const handleShowMe = async () => {
    await fetch("http://localhost:5000/api/v1/users/showMe", {
      credentials: "include",
    });
  };
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    flow: "auth-code",
    scope: "https://www.googleapis.com/auth/youtube.readonly",
  });

  return (
    <main className="h-[100vh] max-h-[100vh] box-border bg-[#333] text-white ">
      <nav className="max-w-7xl mx-auto ">
        <h1 className="text-2xl pt-2">SocialNexus</h1>
      </nav>
      <section className="max-w-7xl mx-auto h-5/6 flex items-center gap-x-8  ">
        <div className="flex flex-col w-[40%] gap-y-6">
          <h1 className="text-2xl md:text-4xl lg:text-5xl capitalize">
            Social <span className="text-primary-600"> Nexus </span> App
          </h1>
          {/* <BodyBase className="leading-10" fontWeight="regular" type="p">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </BodyBase> */}
          <p className="leading-9">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <div className="w-12 flex gap-x-3">
            <Button
              className="w-full"
              impact="bold"
              tone="default"
              shape="rounded"
              size="large"
            >
              Login
            </Button>
            <Button
              className="w-full"
              impact="bold"
              tone="default"
              shape="rounded"
              size="large"
            >
              Register
            </Button>
          </div>
        </div>
        {/* <div className="w-1/2  align-middle flex items-center border  h-full self-center"> */}
        <Image
          src="/assets/images/main.png"
          height={700}
          width={600}
          alt="main"
          className=""
        />
        {/* </div> */}
      </section>
    </main>
  );
};

export default Page;
