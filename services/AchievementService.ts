/* eslint-disable class-methods-use-this */
import { TABLES, getTableInstance } from './Airtable';

const table = getTableInstance(TABLES.ACHIEVEMENT);

class AchievementService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getAchievement(username: string) {
    try {
      const records = await table
        .select({ filterByFormula: `{Display Name} = '${username}'` })
        .all();
      return records;
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new AchievementService();
