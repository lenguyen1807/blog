import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function readingTime(html: string) {
  // ref: https://github.com/markhorn-dev/astro-nano/blob/main/src/lib/utils.ts
  const textOnly = html.replace(/<[^>]+>/g, "");
  const wordCount = textOnly.split(/\s+/).length;
  const readingTimeMinutes = ((wordCount / 200) + 1).toFixed();
  return `${readingTimeMinutes} min read`;
}

function dateDiffInDays(a: Date, b: Date) {
  // ref: https://stackoverflow.com/questions/3224834/get-difference-between-2-dates-in-javascript

  const _MS_PER_DAY = 1000 * 60 * 60 * 24;
  // Discard the time and time-zone information.
  const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
  const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

  return Math.floor((utc2 - utc1) / _MS_PER_DAY);
}

export function formatDate(value: string, fromToday: boolean = false) {
  const date = new Date(value);

  if (fromToday) {
    const today = new Date();
    const dateDiff = dateDiffInDays(date, today);
    return `${date.toLocaleDateString("en-US", {
              // weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })} (${dateDiff} days ago)`;
  }

  return date.toLocaleDateString("en-US", {
            // weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          });
}

export const slugify = (...args: (string | number)[]): string => {
    // reference: https://gist.github.com/codeguy/6684588
    const value = args.join(' ')

    return value
        .normalize('NFD') // split an accented letter in the base letter and the acent
        .replace(/[\u0300-\u036f]/g, '') // remove all previously split accents
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9 ]/g, '') // remove all chars not letters, numbers and spaces (to be replaced)
        .replace(/\s+/g, '-') // separator
}