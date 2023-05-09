import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Bikrant
// Bikrant Jung
export function generateUserFallbackName(username: string) {
  const splitArray = username.split(" ");
  if (splitArray.length === 0) return "PP";
  if (splitArray.length === 1) {
    return splitArray[0][0];
  }
  // ["Bikrant","Jung"]
  return `${splitArray[0][0]}${splitArray[1][0]}`;
}
