/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  Get,
  NotFoundException,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { OrdersService } from './orders.service';

@Controller('Orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @Post()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        customerId: {
          type: "string",
          example: "3010676412623543"
        },
        store: {
          type: "string",
          example: "store 1"
        },
      }
    }
  })
  addOrder(@Body('customerId') customerId: string, @Body('store') storeName: string) {
    if (!customerId || !storeName) throw new NotFoundException('Please provide a customer and a store');

    const items = [{
      name: 'Rice Bag',
      unit: 'KG',
      quantity: 2,
      price: 15,
      totalPrice: 30
    },
    {
      name: 'Peas Bag',
      unit: 'KG',
      quantity: 2,
      price: 15,
      totalPrice: 30
    }];

    const newOrder = this.ordersService.insertOrder(customerId, storeName, items);
    return { newOrder: newOrder };
  }

  @Get()
  getOrders() {
    const orders = this.ordersService.getOrders();
    return { orders: orders };
  }
}
