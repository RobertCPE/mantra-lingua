// src/App.jsx
import './framer/styles.css';

// === UI containers ===
import OuterContainer from './framer/ui/outer-container';
import InnerContainer from './framer/ui/inner-container';

// === Brand & Nav ===
import MlLogo from './framer/ml-logo';
import NavigationBar from './framer/navigation-bar';
import NavigationMenus from './framer/navigation-menus';
import NavigationMenuText from './framer/navigation-menu-text';

// === Hero / promos ===
import StaticHeaderx1 from './framer/static-headerx1';
import SlidingHeaderx3 from './framer/sliding-headerx3';

// === Content ===
import ProductCardHome from './framer/product-card-home';

// === Footer ===
import FooterCTA from './framer/footer-cta';
import Footer from './framer/footer';

// === Inline links ===
import InlineLinkClick from './framer/inline-link-click';
import InlineLinkIconClick from './framer/inline-link-icon-click';

// === Buttons ===
import ButtonPlain from './framer/button-plain';
import ButtonRounded from './framer/button-rounded';
import ButtonLoadMore from './framer/button-load-more';
import ButtonCartoon from './framer/button-cartoon';
import ButtonSubmit from './framer/button-submit';

export default function App() {
  return (
    <div style={{ background: 'rgb(255,253,245)', padding: '24px' }}>
      {/* ====== NAV / HEADER ====== */}
      <h2>Logo</h2>
      <MlLogo.Responsive />

      <h2>Navigation Bar</h2>
      <NavigationBar.Responsive preserveParameters />

      <h2>Navigation Menus</h2>
      <NavigationMenus.Responsive preserveParameters />

      <h2>Navigation Menu Text</h2>
      <NavigationMenuText.Responsive preserveParameters />

      {/* ====== HERO / PROMOS ====== */}
      <h2>Static Header x1</h2>
      <StaticHeaderx1.Responsive preserveParameters />

      <h2>Sliding Header x3</h2>
      <SlidingHeaderx3.Responsive preserveParameters />

      {/* ====== FEATURED PRODUCT ====== */}
      <h2>Product Card Home</h2>
      <ProductCardHome.Responsive
        link="/product-list/shop-books"
        preserveParameters
      />

      {/* ====== INLINE LINKS ====== */}
      <h2>Inline Link Click</h2>
      <InlineLinkClick.Responsive preserveParameters />

      <h2>Inline Link Icon Click</h2>
      <InlineLinkIconClick.Responsive preserveParameters />

      {/* ====== BUTTONS ====== */}
      <h2>Button Plain</h2>
      <ButtonPlain.Responsive preserveParameters />

      <h2>Button Rounded</h2>
      <ButtonRounded.Responsive preserveParameters />

      <h2>Button Load More</h2>
      <ButtonLoadMore.Responsive preserveParameters />

      <h2>Button Cartoon</h2>
      <ButtonCartoon.Responsive preserveParameters />

      <h2>Button Submit</h2>
      <ButtonSubmit.Responsive preserveParameters />

      {/* ====== FOOTER ====== */}
      <h2>Footer CTA</h2>
      <FooterCTA.Responsive preserveParameters />

      <h2>Footer</h2>
      <Footer.Responsive preserveParameters />
    </div>
  );
}