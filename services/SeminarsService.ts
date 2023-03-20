/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import { formattedResponse } from '../src/shared/utils/airtable-utils';

import { TABLES, getTableInstance } from './Airtable';

const table = getTableInstance(TABLES.SEMINARS);

class SeminarClassService {
  /**
   * @description - get private classes list against a specific user.
   * @returns - Return private classes list against a specific user.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getSeminars() {
    try {
      const records: any = await table.select().all();
      return {
        seminars: formattedResponse(records),
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new SeminarClassService();
