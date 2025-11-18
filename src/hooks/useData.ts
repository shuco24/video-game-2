import { useEffect, useState } from "react";

function useData<T>(
  getData: () => { request: Promise<T[]>; cancel: () => void }
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { request: request, cancel } = getData();
    request.then((res) => setData(res));
  }, []);

  return { data, setData, error, setError };
}

export default useData;
