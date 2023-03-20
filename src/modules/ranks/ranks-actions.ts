import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';

import {
  GetRanksQuery as GetRanksQueryType,
  GetRanksDocument,
} from '../../shared/types/generated';

import { RanksStore, ErrorGetRanks } from './ranks-store';

/**
 * @description - get Ranks after send page to browser.
 * @param profileId - Username.
 * @returns - Return user profile Ranks data like level, master and verification.
 */
export const getRanks = createAction(
  RanksStore,
  ErrorGetRanks,
  async (profileId: string): Promise<GetRanksQueryType> => {
    try {
      const response = await client.query({
        query: GetRanksDocument,
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
