import Image from "next/image";
import Link from "next/link";

export interface Product {
  id: string;
  brand: string;
  name: string;
  price: string;
  image: string;
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group block cursor-pointer
                 transition-transform duration-300
                 hover:scale-[1.02] hover:shadow-lg"
    >
      {/* Image container */}
      <div
        className="relative w-full overflow-hidden bg-stone-100"
        style={{ aspectRatio: "3/4" }}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover object-center"
          sizes="(max-width: 640px) 50vw, 25vw"
        />
      </div>

      {/* Info row */}
      <div className="flex items-start justify-between gap-3 mt-3 pb-2">
        <div className="flex-1 overflow-hidden">
          <p className="text-[11px] font-semibold tracking-[0.2em] text-stone-900 uppercase truncate">
            {product.brand}
          </p>
          <p className="text-[11px] text-stone-500 tracking-wide mt-0.5 uppercase truncate">
            {product.name}
          </p>
        </div>
        <p className="text-[11px] font-medium text-stone-900 whitespace-nowrap tracking-wide shrink-0">
          {product.price}
        </p>
      </div>
    </Link>
  );
}
