import { Request, Response } from "express";
import { ShortUrlModel } from "../db/mongo/short.url.model";

export class ShortUrlController {
  async createShortUrl(req: Request, res: Response) {
    // Get the destination from the request body
    const { destination } = req.body;

    // Create a shortUrl
    const newUrl = await ShortUrlModel.create({ destination });

    // Return the shortUrl
    return res.json(newUrl);
  }

  async handleRedirect(req: Request, res: Response) {
    const { shortId } = req.params;

    const short = await ShortUrlModel.findOne({ shortId }).lean();

    if (!short) {
      return res.status(404).json({ msg: "URL not found" });
    }

    return res.redirect(short.destination);
  }

  async getShortUrl(req: Request, res: Response) {
    const { shortId } = req.params;

    const short = await ShortUrlModel.findOne({ shortId }).lean();

    if (!short) {
      return res.status(404).json({ msg: "URL not found" });
    }

    return res.json(short);
  }
}
