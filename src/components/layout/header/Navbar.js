import ButtonPrimary from "@/components/shared/buttons/ButtonPrimary";
import useActiveLink from "@/hooks/useActiveLink";
import getNavItems from "@/libs/getNavItems";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ headerType, isStickyHeader }) => {
  const makeActiveLink = useActiveLink();
  const navItems = getNavItems();
  const homeNav = makeActiveLink(navItems[0]);
  const pagesNav = makeActiveLink(navItems[1]);
  const serviceNav = makeActiveLink(navItems[2]);
  const portfolioNav = makeActiveLink(navItems[3]);
  const blogNav = makeActiveLink(navItems[4]);
  const contactNav = makeActiveLink(navItems[5]);

  return (
    <div className="menu-area d-none d-lg-inline-flex align-items-center">
      <nav id="mobile-menu" className="mainmenu">
        <ul>
          {/* Home Nav */}
          <li
            className={`has-dropdown ${
              homeNav?.isActive ? "current-menu-ancestor" : ""
            }`}
          >
            <Link href={homeNav?.path ? homeNav?.path : "#"}>
              {homeNav?.name}
            </Link>
          </li>

          {/* Pages Nav */}
          <li
            className={`has-dropdown ${
              pagesNav?.isActive ? "current-menu-ancestor" : ""
            }`}
          >
            <Link href={pagesNav?.path ? pagesNav?.path : "#"}>
              {pagesNav?.name}
            </Link>
          </li>

          {/* Services Nav (Multi-Level Hierarchy) */}
          <li
            className={`has-dropdown ${
              serviceNav?.isActive ? "current-menu-ancestor" : ""
            }`}
          >
            <Link href={serviceNav?.path ? serviceNav?.path : "#"}>
              {serviceNav?.name}
            </Link>
            <ul className="sub-menu mega-menu-service">
              {serviceNav?.submenu?.length > 0 &&
                serviceNav.submenu.map((item, idx) => (
                  <li
                    key={item?.id || idx}
                    className={
                      item?.submenu?.length
                        ? "has-dropdown has-nested-submenu"
                        : ""
                    }
                  >
                    <Link
                      className="mega-menu-service-single"
                      href={item?.path || "/"}
                    >
                      <span className="mega-menu-service-title">
                        {item?.name || "Service Name"}
                      </span>
                      <span className="mega-menu-service-nav">
                        <i className="tji-arrow-right-long"></i>
                        <i className="tji-arrow-right-long"></i>
                      </span>
                    </Link>

                    {/* 3rd Level Nested Submenu */}
                    {item?.submenu?.length > 0 && (
                      <ul className="sub-menu nested-sub-menu">
                        {item.submenu.map((subItem, subIdx) => (
                          <li key={subItem?.id || subIdx}>
                            <Link
                              className="mega-menu-service-single nested-service-link"
                              href={subItem?.path || "/"}
                            >
                              <span className="mega-menu-service-title">
                                {subItem?.name}
                              </span>
                              <span className="mega-menu-service-nav">
                                <i className="tji-arrow-right-long"></i>
                                <i className="tji-arrow-right-long"></i>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
            </ul>
          </li>

          {/* Portfolio Nav */}
          <li
            className={`has-dropdown ${
              portfolioNav?.isActive ? "current-menu-ancestor" : ""
            }`}
          >
            <Link href={portfolioNav?.path ? portfolioNav?.path : "#"}>
              {portfolioNav?.name}
            </Link>
          </li>

          {/* Blog Nav */}
          <li
            className={`has-dropdown ${
              blogNav?.isActive ? "current-menu-ancestor" : ""
            }`}
          >
            <Link href={blogNav?.path ? blogNav?.path : "#"}>
              {blogNav?.name}
            </Link>
          </li>

          {/* Contact Nav */}
          <li className={contactNav?.isActive ? "current-menu-ancestor" : ""}>
            <Link href={contactNav?.path ? contactNav?.path : "#"}>
              {contactNav?.name ? contactNav?.name : "Contact"}
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;