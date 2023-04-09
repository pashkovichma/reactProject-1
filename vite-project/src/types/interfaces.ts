export interface IFormCard {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  photo: string;
  consent: boolean;
}

export interface IFormCardPageProps {
  [key: string]: null;
}

export interface IFormCardPageState {
  formCards: IFormCard[];
  isCardHidden: boolean;
}

export interface ICarData {
  id?: number;
  name: string;
  year: number;
  color: string;
  km: number;
  img: string;
  price: number;
  description: string;
}

export interface IResult {
  total: number;
  total_pages: number;
  results: ICarData;
}
