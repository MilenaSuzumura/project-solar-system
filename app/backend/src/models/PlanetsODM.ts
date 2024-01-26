import { Schema, model } from 'mongoose';

const planetsSchema = new Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
});

const Planets = model('Planets', planetsSchema);