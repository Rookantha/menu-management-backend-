async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  const port = process.env.PORT || 8080;

  console.log(`Using PORT: ${port}`);

  // ✅ Force IPv4 binding
  await app.listen(port, '0.0.0.0');

  console.log(`🚀 Server is running at http://0.0.0.0:${port}`);
}

bootstrap();
