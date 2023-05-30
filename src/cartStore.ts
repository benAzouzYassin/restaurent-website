import { atom } from "nanostores";

//recreate the incremen and decrement and edits this until it works then add
//local storage on top of it

export interface Order {
  id: string;
  product: string;
  price: number;
  countInCart: number;
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
  producPrice: number
) => {
  const $orders = orders.value;
  if ($orders) {
    const newOrders = [
      ...$orders,
      {
        id: productId,
        countInCart: 1,
        price: producPrice,
        product: productName,
      },
    ];
    orders.set(newOrders);
    localStorage.setItem("orders", JSON.stringify(orders.value));
    console.log("localstorage updated");
  }
};

export const removeProduct = (productId: string) => {
  const $orders = orders.value;
  if ($orders) {
    const newOrders = $orders?.filter((prod) => prod.id != productId);
    orders.set(newOrders);
    localStorage.setItem("orders", JSON.stringify(orders.value));
    console.log("localstorage updated");
  }
};

export const removeAllProducts = () => {
  orders.set([]);
  localStorage.setItem("orders", JSON.stringify(orders.value));
  console.log("localstorage updated");
};

export const decrement = (productId: string) => {
  const order = orders.value?.find((product) => product.id == productId);
  if (order && order.countInCart > 0) {
    order.countInCart--;
    localStorage.setItem("orders", JSON.stringify(orders.value));
    console.log("localstorage updated");
  }
  if (order && order.countInCart < 1) {
    removeProduct(order.id);
  }
};
export const increment = (productId: string) => {
  const order = orders.value?.find((product) => product.id == productId);
  if (order) {
    order.countInCart++;
    localStorage.setItem("orders", JSON.stringify(orders.value));
  }
};
