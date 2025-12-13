export interface Product {
  id: string
  name: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 'tshirt-black',
    name: 'Black t-shirt',
    price: 7.95,
    image: '/images/tshirt.png',
  },
  {
    id: 'hoodie-black',
    name: 'Black hoodie',
    price: 13,
    image: '/images/hoodie.png',
  },
  {
    id: 'cap-black',
    name: 'Black cap',
    price: 23,
    image: '/images/cap.png',
  },
]

