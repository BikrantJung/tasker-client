import { UserWithToken } from "@/types";
import { create } from "zustand";
// import { type User } from "../types/user.types";
interface IUserStore {
  user: UserWithToken | undefined;
  setUser: (userData: UserWithToken | undefined) => void;
  resetUser: () => void;
}
const initialUserData = undefined;

export const useUserStore = create<IUserStore>()((set) => ({
  user: initialUserData,
  setUser(userData) {
    set({ user: userData });
  },
  resetUser() {
    set(() => ({
      user: initialUserData,
    }));
  },
}));
