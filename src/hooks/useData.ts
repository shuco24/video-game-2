import { CanceledError } from "axios";
import { useEffect, useState } from "react";

function useData<T>(
  getData: () => { request: Promise<T[]>; cancel: () => void },
  deps: any[] = []
) {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const { request: request, cancel } = getData();
    request
      .then((res) => setData(res))
      .catch((err) => {
        console.log("CATCH EN HOOK!!!", err);
        setError(err.message);
      });

    return cancel;
  }, [...deps]);

  return { data, setData, error, setError };
}

export default useData;
