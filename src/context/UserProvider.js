"use client";

import React, { useEffect, useState } from "react";
import UserContext from "./UserContext";
import { currentUser } from "@/services/user";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    // console.log("Starting....");
    async function load() {
      try {
        const logUser = await currentUser();
        // console.log("logUser: ", logUser);
        setUser({ ...logUser });
      } catch (error) {
        setUser(undefined);
      }
    }
    load();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
