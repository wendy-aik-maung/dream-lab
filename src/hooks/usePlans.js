import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchPlans,
  createPlan,
  deletePlan,
  updatePlan,
} from "../services/api/planApi";

// ========= Custom Hooks for Plans ========== //

// ===== Get all plans ===== //

export const useGetPlans = () => {
  return useQuery(["plans"], fetchPlans);
};

// ===== Create plan ===== //

export const useCreatePlan = () => {
  return useMutation(createPlan);
};

// ===== Update plan ===== //

export const useUpdatePlan = () => {
  return useMutation(updatePlan);
};

// ===== Update plan ===== //

export const useDeletePlan = () => {
  return useMutation(deletePlan);
};
