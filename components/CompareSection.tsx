type Props = {
  selectedCount: number;
  onCompare: () => void;
  result: string;
};

export default function CompareSection({
  selectedCount,
  onCompare,
  result,
}: Props) {
  return (
    <div className="mt-6">
      <button
        disabled={selectedCount < 2}
        onClick={onCompare}
        className={`px-4 py-2 rounded text-white ${
          selectedCount < 2
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-black"
        }`}
      >
        ⚖️ Compare ({selectedCount})
      </button>

      {result && (
        <div className="mt-4 p-3 bg-gray-100 rounded text-gray-800">
          {result}
        </div>
      )}
    </div>
  );
}