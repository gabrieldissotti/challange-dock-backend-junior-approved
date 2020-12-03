require('dotenv/config')

const extensionFiles = process.env.NODE_ENV === 'development' ? '.ts' : '.js'

const basePath = process.env.NODE_ENV === 'development' ? '.' : __dirname + '/dist';

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || 'localhost',
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || 'dock',
  password: process.env.DATABASE_PASSWORD || 'dock',
  database: process.env.DATABASE_NAME || 'dock',
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [ basePath + "/src/models/*" + extensionFiles],
  migrations: [basePath + "/src/database/migrations/*" + extensionFiles],
  logging: true,
  cli: {
    "migrationsDir": "./src/database/migrations"
  }
}
