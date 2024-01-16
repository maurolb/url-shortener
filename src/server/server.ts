import express, { Router } from "express";
import cors from "cors";

interface Options {
  port?: number;
  routes: Router;
}

export class Server {
  // app = express, fastify, etc
  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {
    const { port = 5000, routes } = options;
    this.port = port;
    this.routes = routes;
  }

  async start() {
    // Middlewares
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());

    // Routes
    this.app.use(this.routes);

    // Listen port
    this.app.listen(this.port, () => {
      console.log(`Server on port ${this.port}`);
    });
  }
}
