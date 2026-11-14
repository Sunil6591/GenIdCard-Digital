import { notFound } from "next/navigation";
import { marketingPages, marketingPageByPath } from "@/data/marketing-pages";
import { pageMetadata } from "@/lib/seo";
import MarketingPage from "@/components/seo/MarketingPage";

export const dynamicParams = false;
export function generateStaticParams() { return marketingPages.map(page => ({ slug: page.path.slice(1).split("/") })); }
function content(slug: string[]) { return marketingPageByPath.get(`/${slug.join("/")}`) ?? notFound(); }
export function generateMetadata({ params }: { params: { slug: string[] } }) {
  const page = content(params.slug);
  return pageMetadata(page.title, page.description, page.path);
}
export default function Page({ params }: { params: { slug: string[] } }) { return <MarketingPage page={content(params.slug)} />; }
