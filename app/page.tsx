import HeroSection from "@/components/HeroSection";
import NewInSection from "@/components/NewInSection";
import BrandStatement from "@/components/BrandStatement";
import BottomNav from "@/components/BottomNav";
import { getProductsForListing } from "@/lib/products-db";

export const dynamic = "force-dynamic";

export default async function Home() {
  const products = await getProductsForListing();

  return (
    <main>
      <HeroSection />
      <NewInSection products={products.slice(0, 8)} />
      <BrandStatement />
      <BottomNav />
    </main>
  );
}
