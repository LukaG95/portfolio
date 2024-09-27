const { Messages } = require('../Models/MessageModel.js');

exports.sendMessage = async (req, res, next) => {
  try {
    const { fullName, email, budget, plan, message } = req.body;

    // Helper function to check if a value is a non-empty string
    const isValidString = (value) => typeof value === 'string' && value.trim().length > 0;

    if (!isValidString(fullName)) return res.status(400).json({ success: false, message: 'Full name must be a non-empty string' });
    if (!isValidString(email)) return res.status(400).json({ success: false, message: 'Email must be a non-empty string' });
    if (!isValidString(budget)) return res.status(400).json({ success: false, message: 'Budget must be a non-empty string' });
    if (!isValidString(message)) return res.status(400).json({ success: false, message: 'Message must be a non-empty string' });
    
    // Check if plan is an object and has a valid name property
    if (typeof plan !== 'object' || plan === null || !isValidString(plan.name)) {
      return res.status(400).json({ success: false, message: 'Plan must be an object with a valid "name" property' });
    }

    // Check if plan.name is one of the allowed values
    const allowedPlans = ['Basic', 'Enterprise', 'Osnovni', 'Napredni'];
    if (!allowedPlans.includes(plan.name)) {
      return res.status(400).json({ success: false, message: `Plan name must be one of: ${allowedPlans.join(', ')}` });
    }

    try {
      const new_message = {
        fullName, email, budget, plan: plan.name, message
      }
      await new Messages(new_message).save();

    } catch(err) {
      console.log(err, 'something went wrong saving message');
      return res.status(401).json({ success: false, message: 'something went wrong (401)'});
    }    

    // Send a success response
    res.status(200).json({ success: true, message: 'Data processed successfully' });

  } catch (error) {
    console.error('Error processing request:', error);
    res.status(500).json({ success: false, message: 'Something went wrong on the server' });
  }
};
