import type { NextApiRequest, NextApiResponse } from 'next';
import _ from 'lodash';
import TimetableService from '../../../../services/TimetableService';

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function Timetable(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await TimetableService.getTimetable(
        typeof req.query.schoolId === 'string'
          ? req.query.schoolId
          : req.query?.schoolId[0],
      );
      const schoolFormatData = _.mapKeys(data.fields, (v, k) => _.camelCase(k));
      const scheduleSchoolFormatData = data.scheduleSchool.map((rank) =>
        _.mapKeys(rank.fields, (v, k) => _.camelCase(k)),
      );
      const plansFormatData = data.plans.map((rank) =>
        _.mapKeys(rank.fields, (v, k) => _.camelCase(k)),
      );
      res.send({
        ...schoolFormatData,
        scheduleSchool: scheduleSchoolFormatData,
        plans: plansFormatData,
      });
    } catch (error) {
      console.log(error);
      res.status(504).json({ message: 'Server Error' });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default Timetable;
