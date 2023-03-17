import { useMutation, useQuery } from "@tanstack/react-query";
import {
  fetchCategories,
  createCategory,
  deleteCategory,
  updateCategory,
} from "../services/api/categoryApi";

// ========= Custom Hooks for Category ========== //

// ===== Get all category ===== //

export const useGetCategories = () => {
  return useQuery(["categories"], fetchCategories);
};

// ===== Create category ===== //

export const useCreateCategory = () => {
  return useMutation(createCategory);
};

// ===== Update category ===== //

export const useUpdateCategory = () => {
  return useMutation(updateCategory);
};

// ===== Delete category ===== //

export const useDeleteCategory = () => {
  return useMutation(deleteCategory);
};
