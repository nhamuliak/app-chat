import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './modules/db/db.module';
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true }), DbModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
