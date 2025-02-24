import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS for frontend requests
  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 8080; // AWS assigns a dynamic port
  const host = '0.0.0.0'; // Ensures it binds to all network interfaces

  console.log(`🚀 Server starting on ${host}:${port}`);

  try {
    await app.listen(port, host);
    console.log(`✅ Server is running at http://${host}:${port}`);
  } catch (error) {
    console.error('❌ Error starting the server:', error);
    process.exit(1);
  }
}

bootstrap();
