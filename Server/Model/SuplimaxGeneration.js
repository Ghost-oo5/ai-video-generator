// models/SuplimaxGeneration.js
import mongoose from 'mongoose';

const SuplimaxSchema = new mongoose.Schema({
  inputs: {
    features: String,
    tone: String,
    audience: String,
    videoStyle: String,
  },
  imagePrompt: String,
  imageBase64: String,
  imageDescription: String, // the "text" response
  videoScript: String,
  createdAt: { type: Date, default: Date.now },
});

const Suplimax = mongoose.model('SuplimaxGeneration', SuplimaxSchema);

module.exports ={Suplimax}