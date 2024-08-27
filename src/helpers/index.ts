export const formatTempC = (temp: number): number => {
  const Kelvintem = temp - 273.15;
  return parseInt(Kelvintem.toString());
};

export const formatTempF = (tempF: number): number => {
  const temp = ((tempF - 32) * 5) / 9;
  return parseInt(temp.toString());
};
