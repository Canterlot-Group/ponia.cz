const Recaptcha = require('express-recaptcha').RecaptchaV3;
module.exports = new Recaptcha('site_key', 'secret_key');
