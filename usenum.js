import { useEffect, useState } from "react";

export function useNumber(l, r, change) {
  const [data, setData] = useState(0);
  useEffect(() => {
    setData(randomDigit(l, r));
  }, [change]);
  return data;
}
function randomDigit(a, b) {
  return Math.floor(Math.random() * (b - a) + a * 1);
}