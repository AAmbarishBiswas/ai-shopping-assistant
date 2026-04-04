"use client";

type Props = {
  query: string;
  setQuery: (value: string) => void;
  onSearch: () => void;
};

export default function SearchBar({ query, setQuery, onSearch }: Props) {
  return (
    <div className="mt-4">
      <input
        className="border p-3 w-full rounded"
        placeholder="e.g. gaming laptop under 80000"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <button
        onClick={onSearch}
        className="bg-blue-500 text-white px-4 py-2 mt-2 rounded w-full"
      >
        🔍 Search
      </button>
    </div>
  );
}