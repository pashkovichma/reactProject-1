import { ICar } from 'types/interfaces';

export const mockSetCard = (card: ICar) => {
  card;
};

export const mockCard: ICar = {
  id: '1',
  urls: { small: 'a' },
  user: { name: 'a' },
  likes: 2,
  description: 'd',
};
