/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';
import { CustomersService } from 'src/customers/customers.service';

import { Order } from './order.model';



@Injectable()
export class OrdersService {
  private orders: Order[] = [];

  constructor(private customersService: CustomersService) {}

  insertOrder(customerId, storeName, items) {
    const customerExist = this.customersService.getCustomer(customerId);
    if (!customerExist) throw new NotFoundException('Customer not found, please create the customer first.');

    const orderId = Math.random().toString();
    const totalAmount = items.reduce((accum, item) => accum + +item.totalPrice, 0);
    const newOrder = new Order(orderId.split('.')[1], customerId, storeName, totalAmount, items);
    this.orders.push(newOrder);
    return newOrder;
  }

  getOrders() {
    this.orders.map(order => {
      const customer = this.customersService.getCustomer(order.customerId);
      order.customerName = customer.name;
      const customerAddress = customer.addressList.find(address => address.isDefault);
      order.customerAddress = customerAddress.address;
    });
    return this.orders;
  }
}