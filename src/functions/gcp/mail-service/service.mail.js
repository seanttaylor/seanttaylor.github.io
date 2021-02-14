/**
* An configuration object for send emails via the Mailable interface.
* @typedef {Object} EmailMessageConfiguration
* @property {String} from - email addrress of the sender
* @property {Array} to - email address of the primary recipient
* @property {Array} bcc - List of email addresses to 'bcc'
* @property {Array} cc - List of email addresses to 'cc'
* @property {String} subject - Subject of the email
*/


/**
* @typedef {Object} MailService
* @property {Object} _mailLib - the mail library containing the business logic to send email
* @property {Object} _transporter - a transporter object for sending the email message
* @property {Function} send - sends an email
*/

/**
 * @implements {IMailerAPI}
 * @returns {Object} an implementation of the IMailer interface
 */

/**
 * @param {Object} mailLib - an email library 
 */

function MailService(mailLib) {
  /**
  * Sends an email to specified recipients
  * @param {EmailMessageConfiguration} 
  */

    this.send = async function({ from, to, bcc, subject, html}) {
      const message = {
          from,
          to: to.join(', '), // Nodemailer API requires a single comma-separated string of addresses
          //bcc,
          subject,
          text: "[Default text]",
          html
      };
      
      await mailLib.send(message);    
    }
}



module.exports = MailService;