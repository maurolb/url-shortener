import { envs } from "./config/envs";
import { MongoDatabase } from "./server/db/mongo/mongodb";
import { Routes } from "./server/routes";
import { Server } from "./server/server";

(() => {
  main();
})();

async function main() {
  // DB Adapter
  await MongoDatabase.connect({
    dbName: envs.MONGO_DB_NAME,
    mongoUrl: envs.MONGO_URL,
  });
  // Run server
  new Server({
    port: envs.PORT,
    routes: Routes.routes,
  }).start();
}
