import { getUserSubscriptions } from "../services/api/subscriberApi";
import { useQuery } from "@tanstack/react-query";

export const useGetUserSubscription = (status, page, limit) => {
  return useQuery(["subscribers", status, page, limit], () =>
    getUserSubscriptions(status, page, limit)
  );
};
