"use client";
import { useEffect } from "react";

const FacebookSDK = () => {
  useEffect(() => {
    if (window.FB) return;

    window.fbAsyncInit = function () {
      FB.init({
        appId: process.env.NEXT_PUBLIC_APP_FB_APP_ID,
        cookie: true,
        xfbml: true,
        version: "v12.0",
      });
    };

    (function (d, s, id) {
      var js,
        fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode?.insertBefore(js, fjs);
    })(document, "script", "facebook-jssdk");
  }, []);

  return null;
};

export default FacebookSDK;
