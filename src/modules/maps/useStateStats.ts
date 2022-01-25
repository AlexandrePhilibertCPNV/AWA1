import useSWR from "swr";
import { fetcher } from "src/lib/fetcher";

export const useStateStats = (stateId?: string) => {
  const { data, error } = useSWR(`/api/stats?state=${stateId}`, fetcher);

  return {
    data,
  };
};
