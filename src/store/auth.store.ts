import { type StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";

interface IUser {
  id: number;
  name: string;
  email: string;
  email_verified_at: string | null;
  token: string | null;
  created_at: string;
  updated_at: string;
  role : string,
  id_artist: string
}

interface IAppState {
  user: IUser | null;
  token : string
  setToken: (value: string) => void
  setUser: (value: IUser | null) => void;
}

const authUser: StateCreator<IAppState, [["zustand/devtools", never]]> = (
  set
) => ({
  user: null,
  token : "",
  setToken: (value: string) => set({token : value}, false, "setToken"),
  setUser: (value: IUser | null) => set({ user: value }, false, "setUser"),
});

export const useAuthStore = create<IAppState>()(
  devtools(
    persist(authUser, {
      name: "auth",
    })
  )
);
