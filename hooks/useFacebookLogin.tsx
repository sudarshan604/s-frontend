"use client";
import React from "react";
import apiClients from "@/services/http-service";
import { useMutation } from "@tanstack/react-query";

const httpService = new apiClients("/token/token-save");

const useFaceBookLogin = () => {
  const [isUserLoginClick, setUserLoginClick] = React.useState(false);

  const { mutate } = useMutation({
    mutationFn: httpService.create,
  });

  const facebookLoginDialog = () => {
    window.FB.login(
      function (response) {
        if (response.status === "connected") {
          const accessToken = response.authResponse.accessToken;
          const facebookUserId = response.authResponse.userID;
          console.log(response.authResponse);
          mutate(response.authResponse);
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

  const loginWithFacebook = () => {
    setUserLoginClick(true);
    if (!window.FB) {
      console.error("Facebook SDK not loaded");
      return;
    }
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        var uid = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        console.log("auth=", uid, accessToken);
        fetchPagesAndGroups(accessToken);
      } else if (response.status === "not_authorized") {
        console.log("not");
      } else {
        facebookLoginDialog();
      }
    });
  };

  const fetchPagesAndGroups = (accessToken: string) => {
    window.FB.api("/me/accounts", function (pagesResponse) {
      if (pagesResponse && !pagesResponse.error) {
        displayPages(pagesResponse.data);
      } else {
        console.error("Error fetching pages:", pagesResponse.error);
      }
    });

    window.FB.api("/me/groups", function (groupsResponse) {
      if (groupsResponse && !groupsResponse.error) {
        displayGroups(groupsResponse.data);
      } else {
        console.error("Error fetching groups:", groupsResponse.error);
      }
    });
  };

  const displayPages = (pages) => {
    console.log("Displaying Pages:", pages);
  };

  const displayGroups = (groups) => {
    console.log("Displaying Groups:", groups);
  };

  return { loginWithFacebook, facebookLoginDialog };
};

export default useFaceBookLogin;
