"use client";
import { useEffect } from "react";
import useSave from "./useSave";
import { useSaveInstaUser, useSaveInstaPost } from "./instaFetch";
import useFacebookStore from "@/state-management/facebook/facebookStore";

const useFaceBookLogin = () => {
  const { setFacebookCredentials } = useFacebookStore();
  const { mutate, isSuccess } = useSave("/platform/token-save");
  const { mutate: mutateIstaUser, isSuccess: isuserSave } = useSave(
    "/insta/save-insta-user"
  );
  const { mutate: mutateInstaPost } = useSave("/insta/save-insta-post");

  const facebookLoginDialog = (socialMedia: string) => {
    window.FB.login(
      function (response) {
        if (response.status === "connected") {
          const accessToken = response.authResponse.accessToken;
          const userId = response.authResponse.userID;
          setFacebookCredentials(accessToken, userId, socialMedia);
        } else {
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
    if (!window.FB) {
      console.error("Facebook SDK not loaded");
      return;
    }
    FB.getLoginStatus(function (response) {
      if (response.status === "connected") {
        var userId = response.authResponse.userID;
        var accessToken = response.authResponse.accessToken;
        const platform = "facebook";
        setFacebookCredentials(accessToken, userId, platform);
        fetchPagesAndGroups(accessToken);
      } else if (response.status === "not_authorized") {
        console.log("not");
      } else {
        facebookLoginDialog("facebook");
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

  useEffect(() => {
    if (isSuccess) {
      mutateIstaUser({});
    }
  }, [isSuccess]);

  useEffect(() => {
    if (isuserSave) {
      mutateInstaPost({});
    }
  }, [isuserSave]);

  return { loginWithFacebook, facebookLoginDialog };
};

export default useFaceBookLogin;
