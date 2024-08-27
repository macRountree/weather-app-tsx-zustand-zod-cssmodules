export interface Search {
  city: string;
  country: string;
}

export interface Country {
  name: string;
  code: string;
}

//*typing response from the api

export interface Weather {
  name: string;
  main: {
    temp: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
}
