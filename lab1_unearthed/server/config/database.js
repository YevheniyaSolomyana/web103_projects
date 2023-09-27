import pg from 'pg'

const databaseUrl = "postgresql://postgres:QaZm68XAcJkHLcEBYEID@containers-us-west-168.railway.app:7872/railway"

const config = {
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
  database: process.env.PGDATABASE,
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  databaseUrl
}

export const pool = new pg.Pool(config)
