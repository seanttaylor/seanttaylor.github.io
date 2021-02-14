const IMailer = require("./interface.mail.js");
const MailService = require("./service.mail.js");
const EmailTemplate = require("./lib.mail.template.js");
const mailLibrary = require("./lib.mail.js");
const mailService = new IMailer(new MailService(mailLibrary));

/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */

exports.receiveInboundEmailMessage = async (req, res)=> {
  
  if (Object.keys(req.body).length === 0) {
    res.status(400).send();
    return;
  }

  try {

    await mailService.send({
      from: "hello@parcely.us",
      to: [process.env.CLOUD_FUNC_MAIL_SERVICE_INBOUND_EMAIL_ADDRESS],
      subject: `Contact inquiry from ${req.body.name} (${req.body.email})`,
      html: await EmailTemplate.of({templateName: "generalInquiry", data: req.body})
    });

    res.status(204).send();

  } catch(e) {
    console.error(e);
    res.status(500).send();
  }

};
