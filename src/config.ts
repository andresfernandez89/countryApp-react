export const getApiUrl = async (path: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/${path}`);
  return response.json();
};

export const getCountryByCode = async (code: string) => {
  const response = await fetch(`https://restcountries.com/v3.1/alpha/${code}`);
  return response.json();
};
