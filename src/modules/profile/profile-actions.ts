import { client } from '../apollo/client';

import {
  GetProfileQuery as GetProfileQueryType,
  GetProfileDocument,
} from '../../shared/types/generated';

/**
 * @description - get Profile after send page to browser.
 * @param username - Username.
 * @returns - Return user profile basic data like username and avatar.
 */
export const getProfile = async (
  username: string,
): Promise<GetProfileQueryType> => {
  try {
    const response = await client.query({
      query: GetProfileDocument,
      variables: {
        username,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
