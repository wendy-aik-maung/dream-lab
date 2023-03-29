import { useQuery } from "@tanstack/react-query";
import {
  getUserInfo,
  getUserSubscriptionHistory,
} from "../services/api/userAuth";

export const useGetUserSubscriptionHistory = () => {
  return useQuery(["usersubscriptionsHistory"], getUserSubscriptionHistory);
};

export const useGetUserInfo = () => {
  return useQuery(["userInfo"], getUserInfo);
};
