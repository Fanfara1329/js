import { useEffect, useState } from "react";

export function usePassword(cnt, btn) {
  const [data, setData] = useState(0);

  useEffect(() => {
    setData(getRandomPassword(cnt));
  }, [btn]);
  return data;
}

function getRandomPassword(n) {
  const chars =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#/!$%&()=?*+";

  let password = "";
  for (let i = 0; i < n; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }

  return password;
}
