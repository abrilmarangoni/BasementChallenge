export interface Product {
  id: string
  name: string
  description: string
  price: number
  image: string
}

export const products: Product[] = [
  {
    id: 'tshirt-black',
    name: 'Black t-shirt',
    description: 'Unisex Basic Softstyle T-Shirt',
    price: 7.95,
    image: '/images/tshirt.png',
  },
  {
    id: 'hoodie-black',
    name: 'Black hoodie',
    description: 'Premium Heavyweight Hoodie',
    price: 13,
    image: '/images/hoodie.png',
  },
  {
    id: 'cap-black',
    name: 'Black cap',
    description: 'Classic Snapback Cap',
    price: 23,
    image: '/images/cap.png',
  },
]
