import { headerLinks } from "@/constant/constant";
import { HeaderLinks } from "@/types";
import Link from "next/link";
import Image from "next/image";
import { BodyBase } from "../typography/BodyBase";
import UserAvatar from "./UserAvatar";
const Header = () => {
  return (
    <nav className="py-6 px-10 bg-white h-[100px] flex items-center shadow-custom justify-between ">
      <Link href={"/"}>
        <Image
          src={"/assets/images/slogo.png"}
          alt={"logo"}
          width={98}
          height={98}
        />
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
      <UserAvatar />
    </nav>
  );
};

export default Header;
