import sqlite3 from "sqlite3";
import { open } from "sqlite";

let db = null;
export default async function getDb() {
  if (db) return db;
  db = await open({
    filename: "./database.db",
    driver: sqlite3.Database
  });
  await db.exec(`
      DROP TABLE IF EXISTS campus; 
      CREATE TABLE campus (id INTEGER PRIMARY KEY AUTOINCREMENT, name VARCHAR);
      INSERT INTO campus (name) VALUES 
      ('Amsterdam'),
      ('Barcelona'),
      ('Berlin'),
      ('Biarritz'),
      ('Bordeaux'),
      ('Brussels'),
      ('Bucharest'),
      ('La Loupe'),
      ('Lille'),
      ('Lisbon'),
      ('London'),
      ('Lyon'), 
      ('Madrid'),
      ('Marseille'),
      ('Nantes'),
      ('Orléans'),
      ('Paris'),
      ('Reims'),
      ('Remote'),
      ('Strasbourg'),
      ('Toulouse'),
      ('Tours');`);

  return db;
}

export async function getCampusesFromDb() {
  const db = await getDb();
  return db.all("SELECT * from campus");
}
