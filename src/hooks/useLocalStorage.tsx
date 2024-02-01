import { useCallback } from 'react';

export function useLocalStorage(): {
  write: <DataType>(storageKey: string, data: DataType) => void;
  read: (storageKey: string) => void;
} {
  const write = useCallback(<DataType,>(storageKey: string, data: DataType) => {
    localStorage.setItem(storageKey, JSON.stringify(data));
  }, []);

  const read = useCallback(<DataType,>(storageKey: string) => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData === null) return undefined;
    return JSON.parse(storedData) as DataType;
  }, []);

  return { write, read };
}
