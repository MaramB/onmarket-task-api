/* eslint-disable prettier/prettier */
import {
  Controller,
  Post,
  Body,
  NotFoundException,
} from '@nestjs/common';
import { ApiBody } from '@nestjs/swagger';

import { CustomersService } from './customers.service';

@Controller('Customers')
export class CustomersController {
  constructor(private readonly customersService: CustomersService) {}

  @Post()
  @ApiBody({
    schema: {
      type: "object",
      properties: {
        name: {
          type: "string",
          example: "Maram Badr"
        },
        email: {
          type: "string",
          example: "maram.badr1996@gmail.com"
        },
        phone: {
          type: "string",
          example: "01120028206"
        },
        address: {
          type: "string",
          example: "Alexandria"
        },
      }
    }
  })
  addCustomer(
    @Body('name') customerName: string,
    @Body('email') customerEmail: string,
    @Body('phone') customerPhone: number,
    @Body('address') customerAddress,
  ) {
    if (!customerName || !customerEmail || !customerPhone || !customerAddress) throw new NotFoundException('Please provide all customer data.');
    
    const newCustomer = this.customersService.insertCustomer(
      customerName,
      customerEmail,
      customerPhone,
      customerAddress,
    );
    return { newCustomer: newCustomer };
  }
}
