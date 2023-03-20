/* eslint-disable class-methods-use-this */

import axios from 'axios';

class PostmarkService {
  /**
   * @description - send an .
   * @param templateModel - Template model.
   * @param email - Recipient Email.
   */

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async sendFreeTrialToSchool(templateModel, email) {
    axios
      .post(
        'https://api.postmarkapp.com/email/withTemplate',
        {
          TemplateId: 27355189,
          TemplateModel: {
            ...templateModel,
          },
          From: 'apps@dojo.plus',
          To: email,
        },
        {
          headers: {
            Accept: 'application/json',
            'X-Postmark-Server-Token': process.env.POSTMARK_KEY,
          },
        },
      )
      .catch((error) => console.log(error.response.data));
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async sendPreSignEmail(templateModel, email) {
    axios
      .post(
        'https://api.postmarkapp.com/email/withTemplate',
        {
          TemplateId: 27355190,
          TemplateModel: {
            ...templateModel,
          },
          From: 'apps@dojo.plus',
          To: email,
        },
        {
          headers: {
            Accept: 'application/json',
            'X-Postmark-Server-Token': process.env.POSTMARK_KEY,
          },
        },
      )
      .catch((error) => console.log(error.response.data));
  }
}

export default new PostmarkService();
