import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import About7 from "@/components/sections/about/About7";
import About8 from "@/components/sections/about/About8";
import Blogs6 from "@/components/sections/blogs/Blogs6";
import Choose from "@/components/sections/choose/Choose";
import Contact2 from "@/components/sections/contacts/Contact2";
import Faq4 from "@/components/sections/faq/Faq4";
import Features from "@/components/sections/features/Features";
import Funfact3 from "@/components/sections/funfacts/Funfact3";
import Hero9 from "@/components/sections/hero/Hero9";
import FeatureMarquee2 from "@/components/sections/marquee/FeatureMarquee2";
import Process2 from "@/components/sections/process/Process2";
import Services8 from "@/components/sections/services/Services8";
import Testimonials9 from "@/components/sections/testimonials/Testimonials9";
import BackToTop from "@/components/shared/others/BackToTop";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function home() {
    return (
        <div>
            <BackToTop />
            <Header headerType={9} />
            <Header headerType={9} isStickyHeader={true} />
            <div id="smooth-wrapper">
                <div id="smooth-content">
                    <main>
                        <div className="top-space-15"></div>
                        <Hero9 />
                        <About8 />
                        <Services8 />
                        <Choose />
                        <Process2 />
                        <Funfact3 />
                        <FeatureMarquee2 />
                        <About7 />
                        <Features />
                        <Testimonials9 />
                        <Faq4 />
                        <Blogs6 />
                        <Contact2 />
                    </main>
                    <Footer5 />
                </div>
            </div>
            <ClientWrapper />
        </div>
    );
}
