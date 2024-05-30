import React from "react";
import { headerLinks } from "@/constant/constant";
import { HeaderLinks } from "@/types";
import { BodyBase } from "../typography/BodyBase";
import Link from "next/link";
import Avvvatars from "avvvatars-react";
import { useCurrentUser } from "@/hooks/useFetch";
const Header = () => {
  const { data } = useCurrentUser();
  return (
    <nav className="py-6 px-10 bg-white h-[100px] flex items-center shadow-custom justify-between ">
      <Link href={"/"}>
        <BodyBase fontWeight="regular" className="">
          SocialNexus
        </BodyBase>
      </Link>
      <ul className="flex gap-x-14 items-center">
        {headerLinks.map((item: HeaderLinks) => {
          return (
            <ol
              key={item.label + item.route}
              className=" text-lg text-gray-700 capitalize tracking-[1px] transition-all duration-300 ease-in-out  hover:text-[#49a6e9]"
            >
              <Link href={item.route}>{item.label}</Link>
            </ol>
          );
        })}
      </ul>
      <div>
        <Avvvatars value={data?.name} />
      </div>
    </nav>
  );
};

export default Header;
