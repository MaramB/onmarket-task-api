/* eslint-disable prettier/prettier */
export class Customer {
    constructor(
        public customerId,
        public name: string,
        public email: string,
        public phone: number,
        public addressList: [
            {
                address: string,
                isDefault: boolean,
            },
        ]
    ) { }
}
