"use client";

import { useState } from "react";
import axios from "axios";
import Chatbot from "@/components/Chatbot";
import SearchBar from "@/components/SearchBar";
import ProductList from "@/components/ProductList";
import CompareSection from "@/components/CompareSection";
import Loader from "@/components/Loader";

export default function Home() {
  const [query, setQuery] = useState("");
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [explanations, setExplanations] = useState<Record<number, string>>({});
  const [selected, setSelected] = useState<any[]>([]);
  const [comparison, setComparison] = useState("");

  // 🔍 Search products using AI
  const handleSearch = async () => {
    if (!query) return;

    setLoading(true);

    try {
      const aiRes = await axios.post("/api/ai", { query });
      const productRes = await axios.post("/api/products", aiRes.data);

      setProducts(productRes.data);
      setSelected([]); // reset compare selection
      setComparison("");
      setExplanations({});
    } catch (err) {
      console.error("Search error:", err);
    }

    setLoading(false);
  };

  // 🤖 Get AI explanation
  const handleExplain = async (product: any) => {
    try {
      const res = await axios.post("/api/explain", {
        product,
        query,
      });

      setExplanations((prev) => ({
        ...prev,
        [product.id]: res.data.explanation,
      }));
    } catch (err) {
      console.error("Explain error:", err);
    }
  };

  // ❤️ Save to wishlist
  const handleSave = async (product: any) => {
    try {
      await axios.post("/api/wishlist", product);
      alert("Saved to wishlist!");
    } catch (err) {
      console.error("Wishlist error:", err);
    }
  };
  <a
  href="/wishlist"
  className="bg-black text-white px-4 py-2 inline-block mt-2"
  >
  ❤️ Go to Wishlist
  </a>
  // ⚖️ Toggle compare selection
  const handleCompareToggle = (product: any) => {
    setSelected((prev) => {
      const exists = prev.find((p) => p.id === product.id);

      if (exists) {
        return prev.filter((p) => p.id !== product.id);
      } else {
        return [...prev, product];
      }
    });
  };

  // 🧠 Compare selected products
  const handleCompare = async () => {
    if (selected.length < 2) return;

    try {
      const res = await axios.post("/api/compare", {
        products: selected,
        query,
      });

      setComparison(res.data.result);
    } catch (err) {
      console.error("Compare error:", err);
    }
  };
<Chatbot />

  return (
    <main className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold">
        🛍️ AI Shopping Assistant
      </h1>

      {/* 🔍 Search */}
      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={handleSearch}
      />

      {/* ⏳ Loader */}
      {loading && <Loader />}

      {/* 🛍️ Product List */}
      <ProductList
        products={products}
        explanations={explanations}
        onExplain={handleExplain}
        onSave={handleSave}
        onCompare={handleCompareToggle}
      />

      {/* ⚖️ Compare Section */}
      {products.length > 0 && (
        <CompareSection
          selectedCount={selected.length}
          onCompare={handleCompare}
          result={comparison}
        />
      )}
    </main>
    
  );
}