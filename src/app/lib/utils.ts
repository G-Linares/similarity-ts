import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// this will create the dynamic class Names
//py-2 px-2, twMerge will convert it to -> p-2
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
