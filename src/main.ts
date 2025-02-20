import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Ensure the correct port for AWS Elastic Beanstalk
  const port = process.env.PORT || 8080;

  await app.listen(port, '0.0.0.0'); //

  console.log(`🚀 Server is running on http://localhost:${port}`);
}

bootstrap();
