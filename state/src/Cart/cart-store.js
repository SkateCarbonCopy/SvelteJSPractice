import { writable } from "svelte/store";

function createCart() {
  const cart = writable([
    {
      id: "p1",
      title: "A Book",
      price: 9.99,
      description: "A great book!",
    },
    {
      id: "p2",
      title: "A Carpet",
      price: 99.99,
      description: "Red and green.",
    },
  ]);

  return {
    subscribe: cart.subscribe,
    addItem: (item) => {
      cart.update((items) => {
        if (items.find(i => i.id === item.id)) {
            return [...items];
        }
        return [...items, item];
      });
    },
    removeItem: (id) => {
      cart.update((items) => {
        return items.filter((i) => i.id !== id);
      });
    },
  };
}

export default createCart();
