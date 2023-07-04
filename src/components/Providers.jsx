"use client";

import { Toaster } from "react-hot-toast";

const Provider = ({ children }) => {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      {children}
    </>
  );
};

export default Provider;
