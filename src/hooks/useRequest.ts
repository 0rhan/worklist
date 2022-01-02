import { useEffect, useState } from "react";
import { ERROR, IDLE, LOADING, SUCCESS } from "../config/constants";

const useRequest = (request: Function) => {
  const [status, setStatus] = useState<string>(IDLE);
  const [data, setData] = useState<any>();

  useEffect(() => {
    const callRequest = async () => {
      try {
        setStatus(LOADING);
        const data = await request();
        setData(data);
        setStatus(SUCCESS);
      } catch (error) {}
      setStatus(ERROR);
    };

    callRequest();
  }, []);

  const value = {
    status,
    data,
  };

  return value;
};

export default useRequest;
