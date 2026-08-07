import Footer5 from "@/components/layout/footer/Footer5";
import Header from "@/components/layout/header/Header";
import ErrorPrimary from "@/components/sections/error/ErrorPrimary";
import BackToTop from "@/components/shared/others/BackToTop";
import HeaderSpace from "@/components/shared/others/HeaderSpace";
import ClientWrapper from "@/components/shared/wrappers/ClientWrapper";
export default function NotFound() {
	return (
		<div>
			<BackToTop />
			<Header />
			<Header isStickyHeader={true} />
			<div id="smooth-wrapper">
				<div id="smooth-content">
					<main>
						<HeaderSpace />
						<ErrorPrimary />
					</main>
					<Footer5 />
				</div>
			</div>
			<ClientWrapper />
		</div>
	);
}
