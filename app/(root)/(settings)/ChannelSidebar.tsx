import React from "react";
import { Heading } from "@/components/typography/Heading";
import Link from "next/link";

const sidebarLink = [
  {
    label: "Account",
    logo: "",
    href: "/account",
  },
  {
    label: "Channels",
    logo: "",
    href: "/channels",
  },
  {
    label: "Connect Channels",
    logo: "",
    href: "/connectedchannels",
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
              <Link href={item.href}>
                <Heading level={3}>{item.label}</Heading>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default ChannelSidebar;
