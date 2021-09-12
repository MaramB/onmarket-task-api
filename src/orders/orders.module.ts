/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { CustomersModule } from 'src/customers/customers.module';

import { OrdersController } from './orders.controller';
import { OrdersService } from './orders.service';

@Module({
  controllers: [OrdersController],
  providers: [OrdersService],
  imports: [CustomersModule]
})

export class OrdersModule {}
