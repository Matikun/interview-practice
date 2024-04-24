"use client";
import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

const useDebounce = (fn, ms, deps = []) => {
  const callbackRef = useRef(fn);
  const [active, setActive] = useState(false);
  const cancel = () => setActive(null);

  useLayoutEffect(() => {
    callbackRef.current = fn;
  }, [fn]);

  useEffect(() => {
    setActive(false);
    const timeoutId = setTimeout(() => {
      setActive(true);
    }, ms);

    return () => clearTimeout(timeoutId);
  }, deps);

  useEffect(() => {
    if (active) {
      callbackRef.current();
    }
  }, [active]);

  return [() => active, cancel];
};

export default useDebounce;
