require('dotenv').config({ path: __dirname+'/.env' });
// dotenv.config()

export = {
   host: "localhost",
   type: "postgres",
   port: 5432,
   username: process.env.POSTGRES_USER,
   password: process.env.POSTGRES_PASSWORD,
   database: process.env.POSTGRES_DB,
   synchronize: true,
   logging: false,
   entities: [
      "src/entity/**/*.entity.{ts,js}"
   ],
   migrations: [
      "src/migration/**/*{.ts,.js}"
   ],
   subscribers: [
      "src/subscriber/**/*{.ts,.js}"
   ],
   cli: {
      "entitiesDir": "src/entity",
      "migrationsDir": "src/migration",
      "subscribersDir": "src/subscriber"
   }
}