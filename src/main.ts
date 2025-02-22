import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable CORS to allow frontend requests
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Use PORT from environment variables (AWS Elastic Beanstalk uses 8080)
  const port = process.env.PORT || 8080;

  // Ensure app initializes before listening
  await app.init();
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Server is running on: ${process.env.NODE_ENV === 'production' ? 'AWS Elastic Beanstalk' : 'Localhost'} at http://0.0.0.0:${port}`);
}

bootstrap();
