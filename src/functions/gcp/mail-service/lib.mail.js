const sendGridMail = require("@sendgrid/mail");
sendGridMail.setApiKey(process.env.CLOUD_FUNC_MAIL_SERVICE_SENDGRID_API_KEY);

/**
* Sends an email to specified recipients
* @param {EmailMessageConfiguration} 
*/

async function send({from, to, bcc, subject, html}) {
  try {
    await sendGridMail.send({from, to, subject, html});
  } catch(e) {
    console.error(JSON.stringify(e));
  }
}

module.exports = {
  send    
};