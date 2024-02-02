import { useCallback } from 'react';

export function useLocalStorage<DataType>(storageKey: string): {
  write: (data: DataType) => void;
  read: () => DataType | undefined;
} {
  const write = useCallback(
    (data: DataType) => {
      localStorage.setItem(storageKey, JSON.stringify(data));
    },
    [storageKey]
  );

  const read = useCallback(() => {
    const storedData = localStorage.getItem(storageKey);
    if (storedData === null) return undefined;
    return JSON.parse(storedData) as DataType;
  }, [storageKey]);

  return { write, read };
}
