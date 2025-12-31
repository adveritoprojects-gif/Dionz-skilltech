// app/blog/page.tsx
import BlogHero from "../components/BlogHero";
import BlogGrid from "../components/BlogGrid";
import BlogCategories from "../components/BlogCategories";
import Newsletter from "../components/Newsletter";

export default function BlogPage() {
  return (
    <main className="pt-24 pb-20">
      <BlogHero />
      <BlogGrid />
      <BlogCategories />
      <Newsletter />
    </main>
  );
}