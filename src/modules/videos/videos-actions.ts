import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';

import {
  GetProfileVideosQuery as GetProfileVideosQueryType,
  GetProfileVideosDocument,
} from '../../shared/types/generated';

import { ProfileVideosStore, ErrorGetProfileVideos } from './videos-store';

/**
 * @description - get Profile after send page to browser.
 * @param profileId - Username.
 * @returns - Return user profile basic data like username and avatar.
 */
export const getProfileVideos = createAction(
  ProfileVideosStore,
  ErrorGetProfileVideos,
  async (profileId: string): Promise<GetProfileVideosQueryType> => {
    try {
      const response = await client.query({
        query: GetProfileVideosDocument,
        variables: {
          profileId,
        },
      });
      return response.data;
    } catch (error) {
      throw new Error(error);
    }
  },
);
