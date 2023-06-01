import { atom } from "nanostores";

//recreate the incremen and decrement and edits this until it works then add
//local storage on top of it

export interface Order {
  id: string;
  product: string;
  price: number;
  countInCart: number;
  img: string;
}

export const orders = atom<Order[]>([]);

export const getProductCount = (productId: string, ordersState: Order[]) => {
  const order = ordersState.find((product) => product.id == productId);

  if (order) {
    return order.countInCart;
  } else {
    return 0;
  }
};

export const addNewProduct = (
  productId: string,
  productName: string,
  productPrice: number,
  imgUrl: string
) => {
  const $orders = orders.value;
  if ($orders) {
    const newOrders = [
      ...$orders,
      {
        id: productId,
        countInCart: 1,
        price: productPrice,
        product: productName,
        img: imgUrl,
      },
    ].filter((order) => order.countInCart > 0);

    orders.set(newOrders);
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
};

export const removeProduct = (productId: string) => {
  const $orders = orders.value;
  if ($orders) {
    const newOrders = $orders?.filter((prod) => prod.id != productId);
    orders.set(newOrders);
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
};

export const removeAllProducts = () => {
  orders.set([]);
  localStorage.setItem("orders", JSON.stringify(orders.value));
};

export const decrement = (productId: string, count = 1) => {
  const order = orders.value?.find((product) => product.id == productId);
  if (order && order.countInCart > 0) {
    order.countInCart -= count;
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
  if (order && order.countInCart < 1) {
    removeProduct(order.id);
  }
};
export const increment = (productId: string, count = 1) => {
  const order = orders.value?.find((product) => product.id == productId);
  if (order) {
    order.countInCart += count;
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
};

export const updateProductCount = (productId: string, newCount: number) => {
  const savedOrders: Order[] = JSON.parse(
    localStorage.getItem("orders") ?? "[]"
  );
  const order = savedOrders.find((product) => product.id == productId);
  if (order) {
    order.countInCart = newCount;
    localStorage.setItem("orders", JSON.stringify(savedOrders));
  }
};
