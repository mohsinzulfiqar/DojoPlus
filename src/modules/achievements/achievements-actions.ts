import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';

import {
  GetAchivementsQuery as GetAchivementsQueryType,
  GetAchivementsDocument,
} from '../../shared/types/generated';

import { Achivement, ErrorGetAchivement } from './achievements-store';

/**
 * @description - get Profile after send page to browser.
 * @param profileId - Username.
 * @returns - Return user profile basic data like username and avatar.
 */
export const getProfile = createAction(
  Achivement,
  ErrorGetAchivement,
  async (profileId: string): Promise<GetAchivementsQueryType> => {
    try {
      const response = await client.query({
        query: GetAchivementsDocument,
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
