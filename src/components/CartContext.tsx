// context/CartContext.tsx
"use client";
import { IProduct } from "@/type/type";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import toast from "react-hot-toast";

interface CartContextProps {
  cart: IProduct[];
  total: number;
  addToCart: (product: IProduct) => void;
  removeFromCart: (product: IProduct) => void;
  clearCart: (product: IProduct) => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cart, setCart] = useState<IProduct[]>([]);
  const [total, setTotal] = useState<number>(0); // Load cart data from localStorage on component mount

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? (JSON.parse(localStorage.getItem("cart") || "[]") as IProduct[])
        : []
    );

    const storedTotal = Number(localStorage.getItem("total")) || 0;
    setTotal(storedTotal);
  };

  const addToCart = (product: IProduct) => {
    const existing = cart?.find((item) => item._id === product._id);
    if (existing) {
      // Create a new copy of the cart array
      const updatedCart = cart.map((item) =>
        item._id === existing._id
          ? { ...item, quantity: (item.quantity || 0) + 1 }
          : item
      );
      localStorage.setItem("cart", JSON.stringify([...updatedCart]));
      localStorage.setItem(
        "total",
        JSON.stringify(Number(total) + Number(product.discountPrice))
      );
      setCartToState();
      toast.success("Successfully added product!!");
    } else {
      localStorage.setItem(
        "cart",
        JSON.stringify([...cart, { ...product, quantity: 1 }])
      );
      localStorage.setItem(
        "total",
        JSON.stringify(Number(total) + Number(product.discountPrice))
      );
      setCartToState();
      toast.success("Successfully added product!!");
    }
  };

  const removeFromCart = (product: IProduct) => {
    const existing = cart.find((item) => product._id === item._id);
    if (existing && existing.quantity! > 1) {
      existing.quantity = Number(existing.quantity) - 1;
      localStorage.setItem("cart", JSON.stringify([...cart]));
      localStorage.setItem(
        "total",
        JSON.stringify(Number(total) - Number(product.discountPrice))
      );
      toast.success("Successfully Delete  product!!");
      setCartToState();
    }
  };

  const clearCart = (product: IProduct) => {
    const filterProduct = cart.filter((item) => product?._id !== item?._id);
    localStorage.setItem("cart", JSON.stringify(filterProduct));
    localStorage.setItem(
      "total",
      JSON.stringify(
        Number(total) - Number(product.discountPrice) * Number(product.quantity)
      )
    );
    setCartToState();
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, total, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
