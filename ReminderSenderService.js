let mailjet = require ('node-mailjet')
  .connect('3821e73f3db1d06060a4c2c34e1af024', 'c40bbb6e8e834624e0fc0e8d0c0c4a80');

let sendNewReminder = function (email) {
  console.log('email mailjet', email);
  let request = mailjet
    .post("send")
    .request({
      "FromEmail":"acharlot@nego-partner.com",
      "FromName":"Nego-Partner",
      "Subject":"Audit nettoyage",
      "Html-part":"<p>Bonjour,</p>" +
      "<p>Négo-Partner vous informe que vous pouvez dès à présent réaliser un audit qualité de votre site.</p>" +
      "<p>Pour cela, rendez-vous sur votre espace web Audit Négo-Partner : https://negopartnerfront.firebaseapp.com </p>" +
      "<p>Sans validation de cet audit qualité dans le mois, Négo-Partner considèrera que le niveau de propreté est satisfaisant.</p>" +
      "<p>Cordialement.</p>" +
      "<p>Audrey CHARLOT</p>" +
      "<p>Assistante NEGO-PARTNER</p>" +
      "<p>Tél : 06.49.23.49.08</p>" +
      "<p>acharlot@nego-partner.com</p>",
      "Recipients":[
        {
          "Email": email
        }
      ]
    });
  request
    .then(result => {
      console.log('Result OK', result.body)
    })
    .catch(err => {
      console.log('Result NOK', err.statusCode)
    })
};

module.exports = {sendNewReminder: sendNewReminder};