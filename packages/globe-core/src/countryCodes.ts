const COUNTRY_ID_TO_ALPHA2: Record<string, string> = {
  "032": "AR",
  "036": "AU",
  "076": "BR",
  "124": "CA",
  "156": "CN",
  "250": "FR",
  "276": "DE",
  "356": "IN",
  "392": "JP",
  "410": "KR",
  "484": "MX",
  "566": "NG",
  "710": "ZA",
  "818": "EG",
  "826": "GB",
  "840": "US"
};

export function countryIdToAlpha2(countryId?: string | null) {
  if (!countryId) {
    return null;
  }

  return COUNTRY_ID_TO_ALPHA2[countryId.padStart(3, "0")] ?? countryId;
}
