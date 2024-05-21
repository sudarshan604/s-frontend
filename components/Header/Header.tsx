import React from "react";
import { headerLinks } from "@/constant/constant";
import { HeaderLinks } from "@/types";
const Header = () => {
  return (
    <nav>
      <ul>
        {headerLinks.map((item: HeaderLinks) => {
          return <ol key={item.label + item.route}>{item.label}</ol>;
        })}
      </ul>
    </nav>
  );
};

export default Header;
