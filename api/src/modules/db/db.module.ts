import { Module } from '@nestjs/common';
import { Pool } from 'pg';
import { PG_CONNECTION } from "../../constants";

const dbProvider = {
	provide: PG_CONNECTION,
	useValue: new Pool({
		user: process.env.POSTGRES_USER,
		host: process.env.POSTGRES_HOST,
		database: process.env.POSTGRES_DB_NAME,
		password: process.env.POSTGRES_PASSWORD,
		port: process.env.POSTGRES_PORT,
	})
}

@Module({
	providers: [dbProvider],
	exports: [dbProvider]
})
export class DbModule {}
