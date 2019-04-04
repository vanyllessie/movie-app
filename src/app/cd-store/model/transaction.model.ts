export interface Transaction{
  date: Date;
  albums: {
    label: string,
    quantity: number
  }
}
