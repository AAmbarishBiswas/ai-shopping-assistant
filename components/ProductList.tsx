import ProductCard from "./ProductCard";

type Props = {
  products: any[];
  explanations: Record<number, string>;
  onExplain: (product: any) => void;
  onSave: (product: any) => void;
  onCompare: (product: any) => void;
};

export default function ProductList({
  products,
  explanations,
  onExplain,
  onSave,
  onCompare,
}: Props) {
  if (!products.length) {
    return <p className="mt-4 text-gray-500">No products found.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
      {products.map((p) => (
        <ProductCard
          key={p.id}
          product={p}
          explanation={explanations[p.id]}
          onExplain={onExplain}
          onSave={onSave}
          onCompare={onCompare}
        />
      ))}
    </div>
  );
}