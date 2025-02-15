/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule,{ cors: true });
  await app.listen(3001);
  app.enableCors({
    origin: 'http://localhost:3000',
  });
}
void bootstrap();
