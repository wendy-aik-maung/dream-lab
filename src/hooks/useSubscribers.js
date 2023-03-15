import { getUserSubscriptions } from "../services/api/subscriberApi";
import { useQuery } from "@tanstack/react-query";

export const useGetUserSubscription = (currentPage) => {
  return useQuery(["subscribers", currentPage], () =>
    getUserSubscriptions(currentPage)
  );
};
