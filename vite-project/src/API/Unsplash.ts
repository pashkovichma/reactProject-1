import { IResult } from '../types/interfaces';

export default async (value: string) => {
  const id = 'I0PKLGJKPlPQNpr6J8MqUMTGSa2B6A6_WvE5kcF9iQQ';
  const res = await fetch(
    `https://api.unsplash.com/search/photos?query=${value || 'photo'}&client_id=${id}`
  );
  const result: IResult = await res.json();
  return result.results;
};
