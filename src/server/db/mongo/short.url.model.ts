import mongoose, { Document } from "mongoose";
import { customAlphabet } from "nanoid";

const nanoid = customAlphabet("abcdefghijklmnopqrstuv0987654321", 6);

interface ShortURL extends Document {
  shortId: string;
  destination: string;
}

const shortUrlSchema = new mongoose.Schema({
  shortId: {
    type: String,
    unique: true,
    required: true,
    default: () => nanoid(),
  },
  destination: { type: String, required: true },
});

export const ShortUrlModel = mongoose.model<ShortURL>(
  "ShortUrl",
  shortUrlSchema
);
