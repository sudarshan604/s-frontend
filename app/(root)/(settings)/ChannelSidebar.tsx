"use client";
import React from "react";
import { Heading } from "@/components/typography/Heading";
import Link from "next/link";
import { usePathname } from "next/navigation";

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
  const pathname = usePathname();

  return (
    <section>
      <Heading level={2} className=" border-b pb-3 ">
        Settings
      </Heading>
      <ul className="  mt-3 flex flex-col gap-y-4">
        {sidebarLink.map((item) => {
          return (
            <li
              className={`${
                pathname === item.href ? " text-primary-100 " : ""
              }  py-2 pl-6 hover:bg-primary-100 hover:pl-9 hover:transition-all hover:duration-300 hover:ease-in-out`}
              key={item.label}
            >
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
