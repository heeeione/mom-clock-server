const express = require('express');
const router = express.Router();
const twilioClient = require('../config/twilio');

router.post('/send', async (req, res) => {
  const { phoneNumber, message } = req.body;
  try {
    const twilioMessage = await twilioClient.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: phoneNumber,
    });
    res.status(200).send({ success: true, messageSid: twilioMessage.sid });
  } catch (error) {
    res.status(500).send({ success: false, error: error.message });
  }
});

module.exports = router;
