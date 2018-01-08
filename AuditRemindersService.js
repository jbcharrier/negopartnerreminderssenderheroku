let ReminderSender = require('./ReminderSenderService');

let sendReminder = function (accounts) {
  let dateNow = new Date().getTime();

  Object.keys(accounts).forEach(function(key){
    Object.keys(accounts[key].sites).forEach(function(id){
      Object.keys(accounts[key].sites[id].areas).forEach(function(idArea){
        if(accounts[key].sites[id].areas[idArea].auditStartDate !== '' && accounts[key].sites[id].areas[idArea].auditStartDate < dateNow){
          Object.keys(accounts[key].users).forEach(function(userKey){
            if(accounts[key].users[userKey].siteSelected === 'Tous les sites'|| id == accounts[key].users[userKey].siteSelected) {
              let email = accounts[key].users[userKey].email;
              ReminderSender.sendNewReminder(email);
            }
          })
        }
      });
    });
  });
};

module.exports = {sendReminder: sendReminder};