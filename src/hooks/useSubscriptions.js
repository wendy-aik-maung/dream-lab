import { useMutation, useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  fetchSubscriptions,
  createSubscription,
  deleteSubscription,
  fetchSubscription,
  removePlan,
  updateSubscription,
  fetchSubscriptionsForUser,
  userSubscribe,
} from "../services/api/subscriptionApi";

// ========= Custom Hooks for Plans ========== //

// ========== Get all subscriptions ========== //

export const useGetSubscriptions = () => {
  return useQuery(["subscriptions"], fetchSubscriptions);
};

export const useGetSubscriptionsForUser = () => {
  return useQuery(["subscriptionsForUser"], fetchSubscriptionsForUser);
};

// ========== Get Single subscription ==========//

export const useGetSingleSubscription = (id) => {
  return useQuery(["subscription", id], () => fetchSubscription(id));
};

// ========== Create subscription ==========//

export const useCreateSubscription = () => {
  const navigate = useNavigate();
  return useMutation(createSubscription, {
    onSuccess: (newData) => {
      navigate(-1);
    },
  });
};

// ========== Update subscription ==========//

export const useUpdateSubscription = (data) => {
  const navigate = useNavigate();
  return useMutation(updateSubscription, {
    onSuccess: () => {
      navigate(-1);
    },
  });
};

// ========== Delete subscription ==========//

export const useDeleteSubscription = () => {
  return useMutation(deleteSubscription);
};

// ========== Remove Plan ==========//

export const useRemovePlan = () => {
  return useMutation(removePlan);
};

// ========== User Subscribe ==========//

export const useUserSubscribe = () => {
  return useMutation(userSubscribe);
};
