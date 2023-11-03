import { useRouter } from "next/router";
import React, { createContext, useEffect, useState } from "react";
const AuthContext = createContext();
export default AuthContext;
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [sideBar, setSidebar] = useState(true);
  const router = useRouter()
  useEffect(() => {
    setSidebar(false)
  },[router])
  let contextData = {
    user,
    setUser,
    sideBar,
    setSidebar,
  };
  return (
    <AuthContext.Provider value={contextData}>{children}</AuthContext.Provider>
  );
};
