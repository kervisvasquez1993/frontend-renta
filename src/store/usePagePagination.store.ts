import { create } from "zustand";
interface StatePagepagination {
  totalPage: number;
  lastPage: number;
  currentPage: number;
  setTotalPage: (value: number) => void;
  setLastPage: (value: number) => void;
  setCurrentPage: (value: number) => void;
}

export const usePagePagination = create<StatePagepagination>()((set) => ({
  totalPage: 0,
  lastPage: 0,
  currentPage: 0,
  setTotalPage: (value: number) => set({ totalPage: value }),
  setLastPage: (value: number) => set({ lastPage: value }),
  setCurrentPage: (value: number) => set({ currentPage: value }),
}));
