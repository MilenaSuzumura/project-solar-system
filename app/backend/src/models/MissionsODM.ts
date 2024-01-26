import { Schema, model } from 'mongoose';

const missionsSchema = new Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  country: { type: String, required: true },
  destination: { type: String, required: true },
});

const Missions = model('Pet', missionsSchema);