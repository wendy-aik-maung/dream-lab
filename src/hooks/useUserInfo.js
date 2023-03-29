import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addAdditionalInformation,
  getUserInfo,
  getUserSubscriptionHistory,
} from "../services/api/userAuth";

export const useGetUserSubscriptionHistory = () => {
  return useQuery(["usersubscriptionsHistory"], getUserSubscriptionHistory);
};

export const useGetUserInfo = () => {
  return useQuery(["userInfo"], getUserInfo);
};

export const useAddAdditionalInformation = () => {
  return useMutation(addAdditionalInformation);
};
