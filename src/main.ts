import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // 🔥 Fix: Use Elastic Beanstalk's expected port (default: 8080)
  const port = process.env.PORT || 8080;
  await app.listen(port);
  console.log(`Server is running on port ${port}`);
}

bootstrap();
