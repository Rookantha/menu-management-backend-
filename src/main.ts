import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config(); // 

  const app = await NestFactory.create(AppModule);

  
  app.enableCors({
    origin: process.env.FRONTEND_URL || '*', 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 8080; // AWS Elastic Beanstalk assigns a dynamic port
  const host = '0.0.0.0'; // Ensures it binds to all network interfaces

  console.log(`🚀 Starting server on ${host}:${port}...`);

  try {
    await app.listen(port, host);
    console.log(` Server is running at ${await app.getUrl()}`);
  } catch (error) {
    console.error('Error starting the server:', error);
    process.exit(1);
  }
}

bootstrap();
