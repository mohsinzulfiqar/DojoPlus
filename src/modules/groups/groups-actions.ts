import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';

import {
  GetProfileGroupsQuery as GetProfileGroupsQueryType,
  GetProfileGroupsDocument,
} from '../../shared/types/generated';

import { GroupsStore, ErrorGetGroups } from './groups-store';

/**
 * @description - get Profile after send page to browser.
 * @param profileId - Username.
 * @returns - Return user profile basic data like username and avatar.
 */
export const getProfileGroups = createAction(
  GroupsStore,
  ErrorGetGroups,
  async (profileId: string): Promise<GetProfileGroupsQueryType> => {
    try {
      const response = await client.query({
        query: GetProfileGroupsDocument,
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
