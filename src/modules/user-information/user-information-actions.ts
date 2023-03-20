import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';

import {
  GetUserInformationQuery as GetUserInformationQueryType,
  GetUserInformationDocument,
} from '../../shared/types/generated';
import {
  UserInformationStore,
  ErrorGetUserInformation,
} from './user-information-store';

/**
 * @description - Get user information only used after render page in browser.
 * @param {string} userId - User id.
 */
export const getUserInformation = createAction(
  UserInformationStore,
  ErrorGetUserInformation,
  async (userId: string): Promise<GetUserInformationQueryType> => {
    const response = await client.query({
      query: GetUserInformationDocument,
      variables: {
        id: userId,
      },
    });
    return response.data;
  },
);
