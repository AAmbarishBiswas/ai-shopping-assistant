import { NextResponse } from "next/server";
import { products } from "@/data/products";

export async function POST(req: Request) {
  const { budget, category, keywords } = await req.json();

  let filtered = products;

  if (budget) {
    filtered = filtered.filter((p) => p.price <= budget);
  }

  if (category) {
    filtered = filtered.filter((p) =>
      p.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  if (keywords?.length) {
    filtered = filtered.filter((p) =>
      keywords.some((k: string) =>
        p.name.toLowerCase().includes(k.toLowerCase())
      )
    );
  }

  return NextResponse.json(filtered);
}