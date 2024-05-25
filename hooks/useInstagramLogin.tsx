import React, { useState } from "react";

const useInstagramLogin = () => {
  const [userCode, setUserCode] = useState(" ");
  const [userId, setUserId] = useState(" ");
  const loginInstagram = () => {
    const responseType = "code";

    const authURL = `https://api.instagram.com/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_INSTAGRAM_APP_ID}&redirect_uri=${process.env.NEXT_PUBLIC_REDIRECT_URI}&scope=user_profile,user_media&response_type=${responseType}`;

    const left = (screen.width - 500) / 2;
    const top = (screen.height - 500) / 2;

    const authWindow = window.open(
      authURL,
      "name",
      `resizable=yes, width=500, height=500, left=${left}, top=${top}`
    );

    const intervalId = setInterval(() => {
      try {
        if (authWindow?.closed) {
          clearInterval(intervalId);
        }
        if (
          authWindow?.location &&
          authWindow.location.href.includes(
            process.env.NEXT_PUBLIC_REDIRECT_URI!
          )
        ) {
          const urlParams = new URLSearchParams(authWindow.location.search);
          const code = urlParams.get("code");
          setUserCode(code);
          authWindow.close();
          clearInterval(intervalId);
        }
      } catch (error) {}
    }, 500);
  };
  return { loginInstagram };
};

export default useInstagramLogin;
