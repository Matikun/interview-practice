import React, { useEffect, useLayoutEffect, useRef } from "react";

const useInterval = (callback, delay) => {
  //set a ref to the callback
  const callBackRef = useRef(callback);

  useLayoutEffect(() => {
    //ensure the callback its always updated without render
    callBackRef.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const interval = setInterval(() => callBackRef.current(), interval);
    return () => clearInterval(interval);
  }, [delay]);
};

export default useInterval;
