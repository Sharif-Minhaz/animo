import { twMerge } from "tailwind-merge";
import { type ClassValue, clsx } from "clsx";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function readableNumber(input: number) {
	const formattedNumber = new Intl.NumberFormat("en-US").format(input);
	return formattedNumber;
}
