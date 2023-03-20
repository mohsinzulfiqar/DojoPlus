import type { NextApiRequest, NextApiResponse } from 'next';
import SeminarsService from '../../../../services/SeminarsService';

/**
 * @description - get Profile after send page to browser.
 * @param req - Req.
 * @param res - Res.
 * @returns - Return user profile basic data like username and avatar.
 */
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
async function Seminars(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const data = await SeminarsService.getSeminars();
      res.send(data);
    } catch (error) {
      console.log(error);
      res.status(504).json({ message: 'Server Error' });
    }
  } else {
    // Handle any other HTTP method
  }
}

export default Seminars;
