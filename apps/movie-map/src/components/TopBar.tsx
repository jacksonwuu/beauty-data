import { useEffect, useMemo, useState } from "react";
import { ChevronDown, Command, MapPinned, Route, Search, X } from "lucide-react";
import type { CountryFeature } from "@beauty-data/globe-core";
import { countryEmoji } from "../data/countryFlags";
import { cx, fieldClass, iconButtonClass, menuClass, panelClass } from "../ui";

interface TopBarProps {
  totalFilms: number;
  totalCountries: number;
  visibleFilms: number;
  displayedCountry: CountryFeature | null;
  selectedCountryId: string | null;
  countries: CountryFeature[];
  movieCountByCountry: Map<string, number>;
  countryCodeOf: (country: CountryFeature) => string | null;
  onSelectCountry: (country: CountryFeature | null) => void;
  onOpenSearch: () => void;
  onOpenList: () => void;
  listActive: boolean;
  onOpenRoutes: () => void;
  routesActive: boolean;
}

export function TopBar({
  totalFilms,
  totalCountries,
  visibleFilms,
  displayedCountry,
  selectedCountryId,
  countries,
  movieCountByCountry,
  countryCodeOf,
  onSelectCountry,
  onOpenSearch,
  onOpenList,
  listActive,
  onOpenRoutes,
  routesActive
}: TopBarProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) {
      setQuery("");
    }
  }, [open]);

  const filtered = useMemo(() => {
    const needle = query.trim().toLowerCase();

    if (!needle) {
      return countries;
    }

    return countries.filter((country) => country.name.toLowerCase().includes(needle));
  }, [countries, query]);

  const countOf = (country: CountryFeature) => {
    const code = countryCodeOf(country);
    return code ? (movieCountByCountry.get(code) ?? 0) : 0;
  };

  return (
    <header className="pointer-events-none absolute inset-x-0 top-0 z-[240] flex flex-wrap items-start justify-between gap-2 p-4 max-[640px]:p-3">
      <div className="pointer-events-auto grid w-[min(320px,100%)] gap-2 max-[640px]:contents">
        <div className="grid gap-1 max-[640px]:order-1">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#f6c453] shadow-[0_0_12px_rgba(246,196,83,0.8)]" />
            <h1 className="m-0 font-serif text-[1.02rem] leading-none font-semibold tracking-[0.2em] text-[#fff8df] [text-shadow:0_1px_14px_rgba(5,7,9,0.95)]">
              MOVIE MAP
            </h1>
          </div>
          <p className="m-0 text-[0.6rem] font-bold tracking-[0.04em] text-[rgba(246,240,223,0.46)] [text-shadow:0_1px_10px_rgba(5,7,9,0.95)] max-[640px]:text-[0.56rem]">
            <span className="max-[640px]:hidden">{totalFilms.toLocaleString()} films · </span>
            {totalCountries} countries
            {visibleFilms !== totalFilms ? (
              <span className="text-[rgba(246,196,83,0.7)]"> · {visibleFilms.toLocaleString()} in view</span>
            ) : null}
          </p>
        </div>

        <div className="relative max-[640px]:order-3 max-[640px]:basis-full">
          <button
            className={cx(
              panelClass,
              "flex w-full cursor-pointer items-center justify-between gap-2 px-3 py-2 text-left transition hover:border-[rgba(246,196,83,0.4)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f6c453]"
            )}
            type="button"
            aria-expanded={open}
            aria-haspopup="listbox"
            onClick={() => setOpen((value) => !value)}
          >
            <span className="flex min-w-0 items-center gap-2">
              <MapPinned className="shrink-0 text-[#62d7c8]" size={14} />
              <span className="min-w-0 truncate text-[0.84rem] font-extrabold text-[#fff8df]">
                {displayedCountry
                  ? `${countryEmoji(displayedCountry.id)} ${displayedCountry.name}`
                  : "All countries"}
              </span>
            </span>
            <ChevronDown
              className={cx("shrink-0 text-[rgba(246,240,223,0.45)] transition", open && "rotate-180")}
              size={15}
            />
          </button>

          {open ? (
            <>
              <div className="fixed inset-0 z-[-1]" onClick={() => setOpen(false)} role="presentation" />
              <div
                className={cx(menuClass, "absolute top-[calc(100%+6px)] left-0 grid w-full gap-1 p-2")}
                role="listbox"
                aria-label="Countries"
              >
                <div className="relative">
                  <Search
                    className="pointer-events-none absolute top-1/2 left-2.5 -translate-y-1/2 text-[rgba(246,240,223,0.4)]"
                    size={13}
                  />
                  <input
                    className={cx(fieldClass, "h-8 pl-8 text-[0.78rem]")}
                    type="search"
                    placeholder="Find a country"
                    value={query}
                    onChange={(event) => setQuery(event.target.value)}
                    aria-label="Find a country"
                  />
                </div>
                <div className="grid max-h-[min(52vh,420px)] gap-px overflow-y-auto pt-1">
                  {!query.trim() ? (
                    <button
                      className={cx(
                        "flex cursor-pointer items-center justify-between gap-2 rounded-lg border-0 bg-transparent px-2 py-2 text-left transition hover:bg-[rgba(246,240,223,0.07)]",
                        !selectedCountryId && "bg-[rgba(246,196,83,0.1)]"
                      )}
                      type="button"
                      onClick={() => {
                        onSelectCountry(null);
                        setOpen(false);
                      }}
                    >
                      <span className="text-[0.8rem] font-extrabold text-[rgba(246,240,223,0.86)]">
                        🌐 All countries
                      </span>
                      <span className="rounded-full border border-[rgba(246,240,223,0.16)] px-2 py-[2px] text-[0.58rem] font-black text-[rgba(246,240,223,0.5)]">
                        {totalFilms}
                      </span>
                    </button>
                  ) : null}
                  {filtered.map((country) => (
                    <button
                      key={`${country.id}-${country.name}`}
                      className={cx(
                        "grid cursor-pointer grid-cols-[20px_minmax(0,1fr)_auto] items-center gap-2 rounded-lg border-0 bg-transparent px-2 py-[7px] text-left transition hover:bg-[rgba(246,240,223,0.07)]",
                        selectedCountryId === country.id && "bg-[rgba(246,196,83,0.12)]"
                      )}
                      type="button"
                      onClick={() => {
                        onSelectCountry(country);
                        setOpen(false);
                      }}
                      role="option"
                      aria-selected={selectedCountryId === country.id}
                    >
                      <span aria-hidden="true">{countryEmoji(country.id)}</span>
                      <span className="min-w-0 truncate text-[0.79rem] font-extrabold text-[rgba(246,240,223,0.86)]">
                        {country.name}
                      </span>
                      <span className="min-w-6 rounded-full border border-[rgba(246,240,223,0.14)] px-1.5 py-[2px] text-center text-[0.58rem] leading-none font-black text-[rgba(246,196,83,0.8)]">
                        {countOf(country)}
                      </span>
                    </button>
                  ))}
                  {filtered.length === 0 ? (
                    <p className="px-2 py-3 text-[0.76rem] font-bold text-[rgba(246,240,223,0.42)]">
                      No countries found
                    </p>
                  ) : null}
                </div>
              </div>
            </>
          ) : null}
        </div>
      </div>

      <div className="pointer-events-auto flex items-center gap-2 max-[640px]:order-2">
        <button
          className={cx(iconButtonClass, "w-auto flex-row gap-2 px-3")}
          type="button"
          onClick={onOpenSearch}
          aria-label="Search all films"
        >
          <Search size={15} />
          <span className="hidden text-[0.72rem] font-extrabold text-[rgba(246,240,223,0.55)] min-[820px]:inline">
            Search
          </span>
          <span className="hidden items-center gap-0.5 rounded-md border border-[rgba(246,240,223,0.16)] px-1 py-[1px] text-[0.56rem] font-black text-[rgba(246,240,223,0.4)] min-[820px]:flex">
            <Command size={9} />K
          </span>
        </button>
        <button
          className={cx(
            iconButtonClass,
            "w-auto flex-row gap-1.5 px-3",
            routesActive && "border-[rgba(246,196,83,0.5)] bg-[rgba(246,196,83,0.14)] text-[#ffe6a6]"
          )}
          type="button"
          onClick={onOpenRoutes}
          aria-pressed={routesActive}
          aria-label={routesActive ? "Close themed routes" : "Browse themed routes"}
          title={routesActive ? "Close themed routes" : "Browse themed routes"}
        >
          <Route size={15} />
          <span className="hidden text-[0.66rem] font-black tracking-[0.08em] min-[820px]:inline">
            ROUTES
          </span>
        </button>
        <button
          className={cx(
            iconButtonClass,
            "w-auto flex-row gap-1.5 px-3",
            listActive && "border-[rgba(246,196,83,0.5)] bg-[rgba(246,196,83,0.14)] text-[#ffe6a6]"
          )}
          type="button"
          onClick={onOpenList}
          aria-pressed={listActive}
          aria-label={listActive ? "Close the film list" : "Browse films as a list"}
          title={listActive ? "Close the film list" : "Browse films as a list"}
        >
          {listActive ? <X size={15} /> : null}
          <span className="text-[0.66rem] font-black tracking-[0.08em]">
            {listActive ? "CLOSE" : "LIST"}
          </span>
        </button>
      </div>
    </header>
  );
}
