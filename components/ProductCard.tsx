"use client";

type Product = {
  id: number;
  name: string;
  price: number;
  rating: number;
};

type Props = {
  product: Product;
  explanation?: string;
  onExplain: (product: Product) => void;
  onSave: (product: Product) => void;
  onCompare: (product: Product) => void;
};

export default function ProductCard({
  product,
  explanation,
  onExplain,
  onSave,
  onCompare,
}: Props) {
  return (
    <div className="border p-4 rounded-xl shadow-md hover:scale-105 transition">
      <h2 className="font-bold text-lg">{product.name}</h2>

      <p className="text-gray-700 mt-1">💰 ₹{product.price}</p>
      <p className="text-yellow-600">⭐ {product.rating}</p>

      <div className="flex gap-2 mt-3 flex-wrap">
        <button
          onClick={() => onExplain(product)}
          className="bg-green-500 text-white px-3 py-1 rounded text-sm"
        >
          Why?
        </button>

        <button
          onClick={() => onSave(product)}
          className="bg-pink-500 text-white px-3 py-1 rounded text-sm"
        >
          ❤️ Save
        </button>

        <button
          onClick={() => onCompare(product)}
          className="bg-yellow-500 text-white px-3 py-1 rounded text-sm"
        >
          ⚖️ Compare
        </button>
      </div>

      {explanation && (
        <div className="mt-3 text-sm text-gray-600 bg-gray-100 p-2 rounded">
          {explanation}
        </div>
      )}
    </div>
  );
}