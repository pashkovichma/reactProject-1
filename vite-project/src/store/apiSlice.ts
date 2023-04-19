import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ICard } from '../types/interfaces';

const apiKey = 'I0PKLGJKPlPQNpr6J8MqUMTGSa2B6A6_WvE5kcF9iQQ';

interface ISearchResponse {
  results: ICard[];
}

export const unsplashApi = createApi({
  reducerPath: 'unsplashApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.unsplash.com/',
  }),

  endpoints(builder) {
    return {
      searchPhotos: builder.query<ICard[], string>({
        query(query) {
          return query === ''
            ? `photos/random?count=10&client_id=${apiKey}`
            : `search/photos?query=${query}&client_id=${apiKey}`;
        },
        transformResponse: (response: ICard[] & ISearchResponse) => {
          return response.results ? response.results : response;
        },
      }),
      searchPhotoById: builder.query<ICard, string>({
        query(photoId) {
          return `photos/${photoId}?&client_id=${apiKey}`;
        },
      }),
    };
  },
});

export const { useSearchPhotosQuery, useSearchPhotoByIdQuery } = unsplashApi;
