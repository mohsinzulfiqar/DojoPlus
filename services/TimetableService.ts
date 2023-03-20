/* eslint-disable class-methods-use-this */
import { TABLES, getTableInstance } from './Airtable';

const table = getTableInstance(TABLES.TIMETABLE);
const schoolsTable = getTableInstance(TABLES.SCHOOLS);
const plansTable = getTableInstance(TABLES.PLANS);

class TimetableService {
  /**
   * @description - get Profile after send page to browser.
   * @param username - Username.
   * @returns - Return user profile basic data like username and avatar.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async getTimetable(schoolName: string) {
    try {
      const requests = [];
      let schoolRecord = [];
      let timetableRecords = [];

      requests.push(
        schoolsTable
          .select({
            filterByFormula: `{Slug} = '${schoolName}'`,
          })
          .all(),
      );
      requests.push(
        table
          .select({
            filterByFormula: `{Slug Lookup} = '${schoolName}'`,
          })
          .all(),
      );
      await Promise.all(requests).then((res) => {
        schoolRecord = [...res[0]];
        timetableRecords = [...res[1]];
      });
      const plans =
        schoolRecord[0] &&
        (await plansTable
          .select({
            filterByFormula: `FIND("${schoolRecord[0].fields['School Name']}", ARRAYJOIN({School Name (from School)}))`,
          })
          .all());
      return {
        ...schoolRecord[0],
        scheduleSchool: timetableRecords,
        plans: plans || [],
      };
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
}

export default new TimetableService();
