import { useEffect, useState } from "react";

export function useLocalStorage<T>(key: string, initialValue: T) {
  const [value, setvalue] = useState<T>(() => {
    const savedItems = localStorage.getItem(key);

    if (savedItems) {
      return JSON.parse(savedItems);
    }

    return initialValue;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setvalue] as const;
}
