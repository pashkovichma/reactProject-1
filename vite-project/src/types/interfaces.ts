export interface IFormCard {
  name: string;
  surname: string;
  date: string;
  country: string;
  gender: string;
  photo: File;
  consent: boolean;
}

export interface IFormCardPageProps {
  [key: string]: null;
}

export interface IFormCardPageState {
  formCards: IFormCard[];
  isCardHidden: boolean;
}
