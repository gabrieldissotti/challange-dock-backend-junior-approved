require('dotenv/config')

const entitiesPath = "/src/modules/**/infra/typeorm/entities/*";
const migrationsPath = "/src/shared/infra/typeorm/migrations/*";

module.exports = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || '172.17.0.1',
  port: process.env.DATABASE_PORT || 5432,
  username: process.env.DATABASE_USERNAME || 'dock',
  password: process.env.DATABASE_PASSWORD || 'dock',
  database: process.env.DATABASE_NAME || 'dock',
  logging: process.env.DATABASE_LOGGING === 'true',
  entities: [
    '.'+entitiesPath + '.js',
    '.'+entitiesPath + '.ts',
    __dirname + '/dist' + entitiesPath + '.js',
    __dirname + '/dist' + entitiesPath + '.ts',
  ],
  migrations: [
    '.'+migrationsPath + '.js',
    '.'+migrationsPath + '.ts',
    __dirname + '/dist' + migrationsPath + '.js',
    __dirname + '/dist' + migrationsPath + '.ts',
  ],
  logging: process.env.DATABASE_LOGGING || true,
  cli: {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
}
