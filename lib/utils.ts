/** Tiny classnames joiner — avoids pulling in clsx/tailwind-merge for one helper. */
export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}
