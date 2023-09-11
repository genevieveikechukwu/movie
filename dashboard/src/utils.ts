interface DataType {
    key: string,
    productCode: string,
    product: string,
    instruction: string,
    status: string,
    date: string,
    quantity: string

}

 const data: DataType[] = [

];
for (let i = 0; i < 32; i++) {
  data.push({
    key: `${i}`,
    productCode: `BC4${i}AA`,
    product: `Product ${i}`,
    instruction: `Custom Installation ${i}`,
    status: 'Pending',
    date: `2023-10-${i}`,
    quantity: `50${i}`,
  });
}

// console.log(data);
export default data
