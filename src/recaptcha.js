const Recaptcha = require('express-recaptcha').RecaptchaV3;
export default new Recaptcha('site_key', 'secret_key');
