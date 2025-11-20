import { useEffect, useState } from "react";

function useData<T>(
  getData: () => { request: Promise<T[]>; cancel: () => void },
  deps: any[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    const { request: request, cancel } = getData();
    request
      .then((res) => {
        setData(res);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.canceled) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => {
      setIsLoading(true);
      cancel();
    };
  }, [...deps]);

  return { data, setData, error, setError, isLoading, setIsLoading };
}

export default useData;
