import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DaoModule } from './dao/dao.module';

@Module({
  imports: [DaoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
