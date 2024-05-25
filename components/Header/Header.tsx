import React from "react";
import { headerLinks } from "@/constant/constant";
import { HeaderLinks } from "@/types";
import { BodyBase } from "../typography/BodyBase";
const Header = () => {
  return (
    <nav className="py-6 px-10 bg-primary-200 h-[100px] flex justify-between ">
      <BodyBase fontWeight="regular" className="">
        SocialNexus
      </BodyBase>
      <ul className="flex gap-x-14">
        {headerLinks.map((item: HeaderLinks) => {
          return (
            <ol key={item.label + item.route}>
              <a href="#">{item.label}</a>
            </ol>
          );
        })}
      </ul>
      <div></div>
    </nav>
  );
};

export default Header;
