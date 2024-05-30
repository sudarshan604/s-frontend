"use client";
import Button from "@/components/Button";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Page = () => {
  // const handleShowMe = async () => {
  //   await fetch("http://localhost:5000/api/v1/users/showMe", {
  //     credentials: "include",
  //   });
  // };
  // const login = useGoogleLogin({
  //   onSuccess: (codeResponse) => console.log(codeResponse),
  //   flow: "auth-code",
  //   scope: "https://www.googleapis.com/auth/youtube.readonly",
  // });
  const router = useRouter();

  return (
    <main className="h-full   bg-[#333] text-white ">
      <nav className="max-w-7xl mx-auto ">
        <h1 className="text-2xl pt-4">SocialNexus</h1>
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
        />
      </section>
    </main>
  );
};

export default Page;
