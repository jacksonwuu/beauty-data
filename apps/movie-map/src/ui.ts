/**
 * Shared look-and-feel tokens.
 *
 * The globe is the artwork; every control sits on top of a dark, slightly
 * translucent surface with one accent (gold) for the active state and one for
 * metadata (teal). Keeping the strings here stops the panels from drifting
 * apart and keeps the JSX readable.
 */

export const cx = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");

/** Floating surface used by the top bar, the control bar and popovers. */
export const panelClass =
  "rounded-2xl border border-[rgba(246,240,223,0.13)] bg-[rgba(8,12,13,0.82)] shadow-[0_18px_48px_rgba(0,0,0,0.44)] backdrop-blur-xl";

/** Solid surface for menus that must stay readable over bright posters. */
export const menuClass =
  "rounded-xl border border-[rgba(246,240,223,0.15)] bg-[rgba(9,13,14,0.97)] shadow-[0_24px_64px_rgba(0,0,0,0.55)] backdrop-blur-xl";

export const labelClass =
  "text-[0.6rem] font-extrabold uppercase tracking-[0.16em] text-[rgba(246,240,223,0.44)]";

export const iconButtonClass =
  "flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-xl border border-[rgba(246,240,223,0.15)] bg-[rgba(9,13,14,0.78)] text-[rgba(246,240,223,0.8)] transition hover:border-[rgba(246,196,83,0.45)] hover:bg-[rgba(246,196,83,0.12)] hover:text-[#fff8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453] disabled:pointer-events-none disabled:opacity-35";

export const fieldClass =
  "h-9 w-full min-w-0 rounded-xl border border-[rgba(246,240,223,0.14)] bg-[rgba(246,240,223,0.05)] px-3 text-[0.82rem] font-semibold text-[#fff8df] outline-none transition placeholder:text-[rgba(246,240,223,0.34)] focus:border-[rgba(246,196,83,0.6)] focus:bg-[rgba(246,196,83,0.06)] focus:shadow-[0_0_0_3px_rgba(246,196,83,0.12)]";

export const chipClass =
  "inline-flex cursor-pointer items-center gap-1 rounded-full border border-[rgba(246,240,223,0.16)] bg-[rgba(246,240,223,0.05)] px-2.5 py-1 text-[0.7rem] font-extrabold whitespace-nowrap text-[rgba(246,240,223,0.74)] transition hover:border-[rgba(246,196,83,0.5)] hover:bg-[rgba(246,196,83,0.12)] hover:text-[#fff8df] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]";

export const chipActiveClass =
  "border-[rgba(246,196,83,0.62)] bg-[rgba(246,196,83,0.16)] text-[#ffe6a6]";

export const segmentedClass =
  "grid gap-px overflow-hidden rounded-lg border border-[rgba(246,240,223,0.12)] bg-[rgba(246,240,223,0.04)] p-px";

export const segmentClass =
  "min-w-0 cursor-pointer rounded-[5px] border-0 px-2 py-[5px] text-[0.66rem] font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-1 focus-visible:outline-[#f6c453]";

export const segmentActiveClass = "bg-[#d9ad46] text-[#081011]";

export const segmentIdleClass =
  "bg-transparent text-[rgba(246,240,223,0.62)] hover:bg-[rgba(246,240,223,0.07)] hover:text-[#fff8df]";

export const visuallyHiddenClass =
  "pointer-events-none absolute h-px w-px overflow-hidden [clip:rect(0_0_0_0)] whitespace-nowrap";
