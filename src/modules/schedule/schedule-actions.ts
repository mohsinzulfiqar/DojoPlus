import { client } from '../apollo/client';

import {
  GetSchoolSchedulesQuery as GetSchoolSchedulesQueryType,
  GetSchoolSchedulesDocument,
} from '../../shared/types/generated';

/**
 * @description - get Profile after send page to browser.
 * @param slug - Slug School.
 * @returns - Return user profile basic data like username and avatar.
 */
export const getSchoolSchedule = async (
  slug: string,
): Promise<GetSchoolSchedulesQueryType> => {
  const response = await client.query({
    query: GetSchoolSchedulesDocument,
    variables: {
      slug,
    },
  });
  return response.data;
};
