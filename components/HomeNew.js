import React, { useContext, useEffect } from "react";
import AuthContext from "./Context";
import { isEmpty } from "lodash";
import { useRouter } from "next/router";

const HomeNew = ({ Component, pageProps }) => {
  const { user } = useContext(AuthContext);
  const router = useRouter();
  useEffect(() => {
    if (isEmpty(user)) {
      router.push("/login");
    }
  }, [user]);
  return <Component {...pageProps} />;
};

export default HomeNew;
