import express from 'express';

const router = express.Router();

router.post('/', (req, res) => {
  const { name, email, message } = req.body;

  console.log('Contact Form Submission:');
  console.log(name);
  console.log(email);
  console.log(message);

  res.json({
    message: 'Message sent successfully!'
  });
});

export default router;