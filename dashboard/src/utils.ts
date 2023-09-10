interface DataType {
    key: string,
    productCode: string,
    product: string,
    instruction: string,
    status: string,
    date: string,
    quantity: string

}

export const data: DataType[] = [
  {
    key: '4',
    productCode: 'JKL012',
    product: 'Product D',
    instruction: 'Fragile Handling',
    status: 'Active',
    date: '2023-04-05',
    quantity: '100/100',
  },
  {
    key: '5',
    productCode: 'MNO345',
    product: 'Product E',
    instruction: 'No Special Instructions',
    status: 'Inactive',
    date: '2023-05-12',
    quantity: '350/500',
  },
  {
    key: '6',
    productCode: 'PQR678',
    product: 'Product F',
    instruction: 'Minimal Assembly',
    status: 'Active',
    date: '2023-06-18',
    quantity: '300/400',
  },
  {
    key: '7',
    productCode: 'STU901',
    product: 'Product G',
    instruction: 'Professional Installation Required',
    status: 'Inactive',
    date: '2023-07-22',
    quantity: '50/50',
  },
  {
    key: '8',
    productCode: 'VWX234',
    product: 'Product H',
    instruction: 'DIY Assembly',
    status: 'Active',
    date: '2023-08-30',
    quantity: '600/700',
  },
  {
    key: '9',
    productCode: 'YZA567',
    product: 'Product I',
    instruction: 'No Assembly Required',
    status: 'Inactive',
    date: '2023-09-14',
    quantity: '750/800',
  },
  {
    key: '10',
    productCode: 'BCD890',
    product: 'Product J',
    instruction: 'Custom Installation',
    status: 'Active',
    date: '2023-10-02',
    quantity: '400/500',
  },

];

console.log(data);
