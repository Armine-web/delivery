import { useState } from 'react';

function useLocalStorage(key, initialValue) {
  const userId = window.localStorage.getItem('userId'); // Ստանում ենք userId-ն
  const userSpecificKey = userId ? `${key}_${userId}` : key; // Ավելացնում ենք userId-ն key-ի հետ

  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(userSpecificKey);
    return item ? JSON.parse(item) : initialValue;
  });

  const setValue = (value) => {
    const valueToStore = value instanceof Function ? value(storedValue) : value;
    setStoredValue(valueToStore);
    window.localStorage.setItem(userSpecificKey, JSON.stringify(valueToStore)); // Պահպանում ենք user-specific key-ի տակ
  };

  return [storedValue, setValue];
}

export default useLocalStorage;
