import { getApiUrl } from "../config";

export default async function UseGetAllCountries() {
  const data = await getApiUrl("all");
  return data;
}
