import { MdCategory } from 'react-icons/md';
import { create } from 'zustand';

export const useCartStore = create((set, get) => ({
  cart: [],
  cards: [],
  selectedProduct: null,
  openEditModal: false,
  search: '',
  category: '',
  sort: '',
  setSearch: (search) => set({ search }),
  setCategory: (category) => set({ category }),
  setSort: (sort) => set({ sort }),
  setCards: (products) => set({ cards: products }),


  addToCart: (product) => {
    const cart = get().cart;
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      const updatedCart = cart.map((item) =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      set({ cart: updatedCart })
    } else {
      set({ cart: [...cart, { ...product, quantity: 1 }] });
    }
  },

  increseQuantity: (id) => {
    const cart = get().cart;
    const updatedCart = cart.map((item) => item.id == id ?
      { ...item, quantity: item.quantity + 1 } : item)
    set({ cart: updatedCart })
  },

  decreaseQuantity: (id) => {
    const cart = get().cart;
    const updatedCart = cart.map((item) => item.id === id
      && item.quantity > 1 ? { ...item, quantity: item.quantity - 1 }
      : item
    );
    set({ cart: updatedCart })
  },


  removeFromCart: (id) => set((state) => ({
    cards: state.carts.filter((card) => card.id !== id),
  })),
  removeFromCart: (id) => set((state) => ({
    cart: state.cart.filter((item) => item.id !== id),
  })),



  handleEdit: (product) =>
    set({
      selectedProduct: product,
      openEditModal: true,
    }),

  closeEditModal: () => set({ openEditModal: false }),

  updateProduct: (updated) =>
    set((state) => ({
      cards: state.cards.map((p) =>
        p.id === updated.id ? updated : p
      ),
      selectedProduct: null,
      openEditModal: false,
    })),

  addProduct: (product) =>
    set((state) => ({
      cards: [product, ...state.cards],
      openAddModal: false,
    })),

}));
