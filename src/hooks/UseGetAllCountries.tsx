import { getApiUrl, getCountryByCode } from "../config";

export async function UseGetAllCountries() {
  const data = await getApiUrl("all");
  return data;
}

export async function UsegetCountryByCode(code: string) {
  const data = await getCountryByCode(code);
  return data;
}
