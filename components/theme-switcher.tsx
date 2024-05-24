"use client";
import React, { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const themesList = ["base", "rainforest", "candy"];
  const [activeTheme, setActiveTheme] = useState("base");
  useEffect(() => {
    document.querySelector("body")?.setAttribute("data-theme", activeTheme);
  }, [activeTheme]);

  return (
    <div className="text-se" onClick={() => setActiveTheme("candy")}></div>
  );
};

export default ThemeSwitcher;
