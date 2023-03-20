import { createAction } from '@cobuildlab/react-simple-state';
import { client } from '../apollo/client';
import {
  CreatePreSignupDocument,
  CreatePreSignupMutation as CreatePreSignupMutationType,
  PreSignupCreateInput,
} from '../../shared/types/generated';
import { OnCreatedSchoolTrial, OnErrorCreateTrial } from './trial-store';

/**
 * @description - create a trial record.
 */
export const createTrial = createAction(
  OnCreatedSchoolTrial,
  OnErrorCreateTrial,
  async (
    data: PreSignupCreateInput,
  ): Promise<CreatePreSignupMutationType['preSignupCreate']> => {
    const request = await client.mutate({
      mutation: CreatePreSignupDocument,
      variables: {
        data,
      },
    });
    return request.data.preSignupCreate;
  },
);
