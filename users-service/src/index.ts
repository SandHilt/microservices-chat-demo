import "reflect-metadata";

import { initiConnection } from "#root/db/connection";
import startServer from "#root/server/startServer";

initiConnection().then(() => {
  startServer();
});
