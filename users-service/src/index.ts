import "reflect-metadata";

import { initiConnection } from "#root/db/connection";

initiConnection().then(() => {
  console.log("DB connection established!");
});
