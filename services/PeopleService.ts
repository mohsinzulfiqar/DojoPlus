/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable class-methods-use-this */
import { TABLES, getTableInstance } from './Airtable';

const table = getTableInstance(TABLES.PEOPLE);

class PeopleService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  async getUser(username: string) {
    try {
      const records = await table
        .select({ filterByFormula: `{username} = '${username}'` })
        .all();
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async createUser(data) {
    try {
      const records = await table.create({
        ...data,
      });

      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new PeopleService();
