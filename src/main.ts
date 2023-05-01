import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  await app.listen(8000, () => {
     console.log("Server Started Successfully");
     
  });
}
bootstrap();
