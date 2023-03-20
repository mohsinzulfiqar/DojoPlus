import { client } from '../apollo/client';

import {
  GetPlansDocument,
  GetPlansQuery,
  CreateCheckoutSessionDocument,
  CreateCheckoutSessionMutation,
  CreateCheckoutSessionInput,
} from '../../shared/types/generated';

/**
 * @description - get Plan after send page to browser.
 * @param slug - School Slug.
 * @returns - Return plan data list.
 */
export const getPlan = async (slug: string): Promise<GetPlansQuery> => {
  try {
    const response = await client.query({
      query: GetPlansDocument,
      variables: {
        slug,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

/**
 * @description - get Plan after send page to browser.
 * @param data - School.
 * @returns - Return plan data list.
 */
export const createCheckoutSession = async (
  data: CreateCheckoutSessionInput,
): Promise<CreateCheckoutSessionMutation> => {
  console.log(data);
  try {
    const response = await client.mutate({
      mutation: CreateCheckoutSessionDocument,
      variables: {
        data,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};
