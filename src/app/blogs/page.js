import { Suspense } from "react";
import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import DynamicBlogMain from "@/components/blog/DynamicBlogMain";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";

export const metadata = {
  title: "Blog | Memat Digi",
  description:
    "Insights, guides and strategies on digital marketing, web development, branding and technology from the Memat Digi team.",
  openGraph: {
    title: "Blog | Memat Digi",
    description:
      "Insights, guides and strategies on digital marketing, web development, branding and technology.",
    type: "website",
  },
};

export default function Blogs() {
  return (
    <div>
      <BackToTop />
      <Header />
      <Header isStickyHeader={true} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeaderSpace />
            <Suspense fallback={<div style={{ minHeight: "60vh" }} />}>
              <DynamicBlogMain />
            </Suspense>
          </main>
          <Footer5 />
        </div>
      </div>
      <ClientWrapper />
    </div>
  );
}
