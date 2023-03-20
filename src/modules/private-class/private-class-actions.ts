import { client } from '../apollo/client';

import {
  GetPrivateClassDocument,
  CreatePrivateClassCheckoutInput,
  CreatePrivateClassDocument,
  CreatePrivateClassMutation,
  GetPrivateClassQuery,
} from '../../shared/types/generated';

/**
 * @description - get Private class after send page to browser.
 * @param username - Username master.
 * @returns - Return private class list.
 */
export const getPrivateClass = async (
  username: string,
): Promise<GetPrivateClassQuery> => {
  try {
    const response = await client.query({
      fetchPolicy: 'no-cache',
      query: GetPrivateClassDocument,
      variables: {
        username,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * @description - get Plan after send page to browser.
 * @param data - School Id.
 * @returns - Return plan data list.
 */
export const privateClassCheckout = async (
  data: CreatePrivateClassCheckoutInput,
): Promise<CreatePrivateClassMutation> => {
  console.log(data);
  try {
    const response = await client.mutate({
      mutation: CreatePrivateClassDocument,
      variables: {
        data,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
