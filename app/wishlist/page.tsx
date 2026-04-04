"use client";

import { useEffect, useState } from "react";
import axios from "axios";

export default function WishlistPage() {
  const [items, setItems] = useState<any[]>([]);

  const fetchWishlist = async () => {
    const res = await axios.get("/api/wishlist");
    setItems(res.data);
  };

  const removeItem = async (id: any) => {
    await axios.delete("/api/wishlist?id=" + id);
    fetchWishlist();
  };

  useEffect(() => {
    fetchWishlist();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">❤️ Wishlist</h1>

      {items.length === 0 && <p>No items saved</p>}

      {items.map((item) => (
        <div key={item.id} className="border p-3 mt-3">
          <h2>{item.name}</h2>
          <p>₹{item.price}</p>

          <button
            onClick={() => removeItem(item.id)}
            className="bg-red-500 text-white px-2 py-1 mt-2"
          >
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}