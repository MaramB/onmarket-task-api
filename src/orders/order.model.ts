/* eslint-disable prettier/prettier */
export class Order {
    customerName: string;
    customerAddress: string;

    constructor(
        public orderId: string,
        public customerId: string, // customer reference
        public storeName: string,
        public totalAmount: number,
        public items: [
            {
                name: string,
                unit: string,
                quantity: number,
                price: number,
                totalPrice: number
            },
        ],
    ) { }
}
