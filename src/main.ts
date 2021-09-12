import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

import { AppModule } from './app.module';
import { CustomersModule } from './customers/customers.module';
import { OrdersModule } from './orders/orders.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('On Market')
    .setDescription('On Market Task API')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config, {
    include: [CustomersModule, OrdersModule], // don't include, say, BearsModule
  });
  SwaggerModule.setup('', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
