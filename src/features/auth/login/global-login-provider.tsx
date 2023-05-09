import React from "react";
import { useInitialLogin } from "./hooks";
interface LoginProviderProps {
  children: React.ReactNode;
}
/**
 * A global wrapper for getting currently logged in user.
 * This wrapper makes a request to api along with cookie, based on Refresh token on cookie,
 * current user will be returned and authenticated
 */
export const LoginProvider = ({ children }: LoginProviderProps) => {
  const { isLoading } = useInitialLogin();
  return <div>{isLoading ? <div>Loading</div> : children}</div>;
};
