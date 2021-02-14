import config from "config";
import { Connection, createConnection } from "typeorm";

import User from "./entities/User";

let connection: Connection;

export const initiConnection = async () => {
  connection = await createConnection({
    entities: [User],
    type: "mysql",
    url: <string>config.get("USERS_SERVICE_DB_URL"),
  });
};

const getConnection = () => connection;

export default getConnection;
