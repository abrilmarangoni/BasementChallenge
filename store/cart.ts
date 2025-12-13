import { create } from 'zustand'

export type Size = 'S' | 'M' | 'L' | 'XL'

export interface CartItem {
  id: string
  name: string
  description?: string
  price: number
  image: string
  quantity: number
  size: Size
}

interface CartState {
  items: CartItem[]
  isOpen: boolean
  openCart: () => void
  closeCart: () => void
  toggleCart: () => void
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string, size: Size) => void
  updateQuantity: (id: string, size: Size, quantity: number) => void
  updateSize: (id: string, currentSize: Size, newSize: Size) => void
  clearCart: () => void
  totalItems: () => number
  totalPrice: () => number
}

export const useCartStore = create<CartState>((set, get) => ({
  items: [],
  isOpen: false,

  openCart: () => set({ isOpen: true }),
  closeCart: () => set({ isOpen: false }),
  toggleCart: () => set((state) => ({ isOpen: !state.isOpen })),

  addItem: (item) =>
    set((state) => {
      const existingItem = state.items.find(
        (i) => i.id === item.id && i.size === item.size
      )
      if (existingItem) {
        return {
          items: state.items.map((i) =>
            i.id === item.id && i.size === item.size
              ? { ...i, quantity: i.quantity + 1 }
              : i
          ),
        }
      }
      return { items: [...state.items, { ...item, quantity: 1 }] }
    }),

  removeItem: (id, size) =>
    set((state) => ({
      items: state.items.filter((i) => !(i.id === id && i.size === size)),
    })),

  updateQuantity: (id, size, quantity) =>
    set((state) => ({
      items:
        quantity <= 0
          ? state.items.filter((i) => !(i.id === id && i.size === size))
          : state.items.map((i) => (i.id === id && i.size === size ? { ...i, quantity } : i)),
    })),

  updateSize: (id, currentSize, newSize) =>
    set((state) => {
      if (currentSize === newSize) return state
      const existingWithNewSize = state.items.find((i) => i.id === id && i.size === newSize)
      const currentItem = state.items.find((i) => i.id === id && i.size === currentSize)
      if (!currentItem) return state
      if (existingWithNewSize) {
        // Merge quantities and remove current item
        return {
          items: state.items
            .map((i) => i.id === id && i.size === newSize ? { ...i, quantity: i.quantity + currentItem.quantity } : i)
            .filter((i) => !(i.id === id && i.size === currentSize)),
        }
      }
      // Just update the size
      return {
        items: state.items.map((i) => (i.id === id && i.size === currentSize ? { ...i, size: newSize } : i)),
      }
    }),

  clearCart: () => set({ items: [] }),

  totalItems: () => get().items.reduce((acc, item) => acc + item.quantity, 0),

  totalPrice: () =>
    get().items.reduce((acc, item) => acc + item.price * item.quantity, 0),
}))
