"use client";
import React from "react";

const FaceBookLogin = () => {
  const [facebookAccessToken, setFacebookAccessToken] = React.useState({
    accessToken: "",
    facebookUserId: "",
  });
  const [isUserLoginClick, setUserLoginClick] = React.useState(false);

  const loginWithFacebook = () => {
    setUserLoginClick(true);
    if (!window.FB) {
      console.error("Facebook SDK not loaded");
      return;
    }
    window.FB.login(
      function (response) {
        if (response.status === "connected") {
          const accessToken = response.authResponse.accessToken;
          const facebookUserId = response.authResponse.userID;
          console.log(response);
          setFacebookAccessToken({ accessToken, facebookUserId });
        } else {
          setUserLoginClick(false);
        }
      },
      {
        scope: process.env.NEXT_PUBLIC_FACEBOOK_SCOPES,
        auth_type: "rerequest",
        return_scopes: true,
        auth_nonce: "my_nonce",
        auth_nonce_description:
          "Access to your Instagram account is required to use this app.",
      }
    );
  };

  return (
    <div>
      <button onClick={loginWithFacebook}>Login with Facebook</button>
      {isUserLoginClick && !facebookAccessToken.accessToken && (
        <p>Login in progress...</p>
      )}
    </div>
  );
};

export default FaceBookLogin;
