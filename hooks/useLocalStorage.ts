import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

function getStorageValue(key: string) {
  const saved: any = localStorage.getItem(key);
  const initial = JSON.parse(saved) || [];
  return initial;
}

export const useLocalStorage = (key: string) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key);
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
