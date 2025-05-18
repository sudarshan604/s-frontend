"use client";
import Button from "@/components/shared/Button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Page = () => {
  const router = useRouter();

  return (
    <main className="h-full   bg-[#333] text-white ">
      <nav className="max-w-7xl mx-auto ">
        <h1 className="text-2xl pt-4">
          <Image
            src={"/assets/images/slogo.png"}
            alt={"logo"}
            width={98}
            height={98}
          />
        </h1>
      </nav>
      <section className="max-w-7xl mx-auto h-5/6 flex items-center gap-x-8  ">
        <div className="flex flex-col w-[60%] gap-y-6">
          <h1 className="text-6xl capitalize font-bold tracking-wider">
            Social <span className="text-primary-600"> Nexus </span> App
          </h1>

          <p className="leading-9 max-w-[70%]">
            Crucifix narwhal street art asymmetrical, humblebrag tote bag pop-up
            fixie raclette taxidermy craft beer. Brunch bitters synth, VHS
            crucifix heirloom meggings bicycle rights.
          </p>
          <div className="w-12 flex gap-x-3">
            <Button
              impact="bold"
              tone="default"
              shape="rounded"
              size="large"
              onClick={() => {
                router.push("/signin");
              }}
            >
              Login
            </Button>
            <Button
              impact="bold"
              tone="default"
              shape="rounded"
              size="large"
              onClick={() => {
                router.push("/signup");
              }}
            >
              Register
            </Button>
          </div>
        </div>
        <Image
          src="/assets/images/main.png"
          height={700}
          width={600}
          alt="main"
          className=""
          priority
        />
      </section>
    </main>
  );
};

export default Page;
