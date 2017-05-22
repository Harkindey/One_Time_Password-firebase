const twilio = require('twilio');

const accountSid = 'ACa6ee0c39db039704f749b218f4cc1f65';
const authToken = '915c0a5b508da900d268aa1039cb952b';

module.exports = new twilio.Twilio(accountSid, authToken);
