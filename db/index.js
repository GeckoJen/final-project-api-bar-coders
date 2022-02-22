import pg from "pg";
import { databaseURL } from "../config.js";

// import * as config from "../config.js";

export const pool = new pg.Pool({
      connectionString: databaseURL,
      ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
      return pool.query(text, params);
}
