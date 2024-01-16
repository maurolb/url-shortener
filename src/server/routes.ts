import { Router } from "express";
import { ShortUrlController } from "./controllers/short.url.controller";

export class Routes {
  // método static para acceder sin crear instancia de la clase
  // get para utilizar el método sin tener que llamarlo
  static get routes(): Router {
    const router = Router();

    // instancia el controller
    const controller = new ShortUrlController();

    // Routes
    // ("URL", [middlewares], controller)
    router.get("/", (req, res) => {
      res.send(`
      <html>
        <head>
          <title>Short URL APP</title>
        </head>
        <body>
          <h1>Project works!!</>
        </body>
      </html>

      `);
    });
    router.post("/api/url", controller.createShortUrl);
    router.get("/api/url/:shortId", controller.getShortUrl);
    router.get("/:shortId", controller.handleRedirect);

    return router;
  }
}
