import React from "react";
import { Heading } from "@/components/typography/Heading";

const sidebarLink = [
  {
    label: "Account",
    logo: "",
  },
  {
    label: "Channels",
    logo: "",
  },
  {
    label: "Connect Channels",
    logo: "",
  },
];

const ChannelSidebar = () => {
  return (
    <section>
      <Heading level={2} className=" border-b pb-3 ">
        Settings
      </Heading>
      <ul className="pl-4  mt-3 flex flex-col gap-y-4">
        {sidebarLink.map((item) => {
          return (
            <li key={item.label}>
              <a href="$">
                <Heading level={3}>{item.label}</Heading>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChannelSidebar;
