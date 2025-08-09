import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB;

let client = null;
let db = null;

// Cache across hot reloads in dev
let _mongoClientPromise = global._mongoClientPromise;

export async function getDb() {
  if (db) return db;

  if (!_mongoClientPromise) {
    if (!uri) throw new Error("Please add MONGODB_URI to .env.local");
    const _client = new MongoClient(uri);
    _mongoClientPromise = _client.connect();
    global._mongoClientPromise = _mongoClientPromise;
  }

  client = await _mongoClientPromise;
  db = client.db(dbName);
  return db;
}
