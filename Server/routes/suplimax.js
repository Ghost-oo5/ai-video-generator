// routes/suplimax.js
import express from 'express';
import SuplimaxGeneration from '../models/SuplimaxGeneration.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const {
      inputs,           // form inputs (features, tone, etc.)
      imagePrompt,      // the prompt used to generate image
      image,            // base64 string from Gemini response
      imageDescription, // the "text" description from image API
      videoScript       // full script from script API
    } = req.body;

    const record = await SuplimaxGeneration.create({
      inputs,
      imagePrompt,
      imageBase64: image,
      imageDescription,
      videoScript
    });

    res.status(201).json({ success: true, id: record._id });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save Suplimax generation' });
  }
});

module.exports =  router;
