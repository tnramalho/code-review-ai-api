import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClaudeApiModule } from './claude-api/claude-api.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClaudeApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
