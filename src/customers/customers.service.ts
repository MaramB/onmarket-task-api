/* eslint-disable prettier/prettier */
import { Injectable, NotFoundException } from '@nestjs/common';

import { Customer } from './customer.model';

@Injectable()
export class CustomersService {
  private customers: Customer[] = [];

  insertCustomer(name, email, phone, address) {
    const customerId = Math.random().toString();
    const newCustomer = new Customer(customerId.split('.')[1], name, email, phone, address);
    this.customers.push(newCustomer);
    return newCustomer;
  }

  getCustomer(customerId) {
    const customer = this.customers.find(customer => customer.customerId == customerId);
    if (!customer) throw new NotFoundException('Customer not found, please create the customer first.');
    return customer;
  }
}