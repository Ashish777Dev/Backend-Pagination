import { useState, useEffect } from "react";

const useResize = () => {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1200,
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleResize = () => setWindowSize({ width: window.innerWidth });

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize.width;
};

export default useResize;
