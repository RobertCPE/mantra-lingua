// src/App.jsx
import './framer/styles.css'

// --- Brand & Nav ---
import MlLogo from './framer/ml-logo.jsx'
import NavigationBar from './framer/navigation-bar.jsx'
import NavigationMenus from './framer/navigation-menus.jsx'
import NavigationMenuText from './framer/navigation-menu-text.jsx'

// --- Hero / promos ---
import StaticHeaderx1 from './framer/static-headerx1.jsx'
import SlidingHeaderx3 from './framer/sliding-headerx3.jsx'

// --- Content ---
import ProductCardHome from './framer/product-card-home.jsx'

// --- Footer ---
import FooterCTA from './framer/footer-cta.jsx'
import Footer from './framer/footer.jsx'

// --- Inline links (optional small elements) ---
import InlineLinkClick from './framer/inline-link-click.jsx'
import InlineLinkIconClick from './framer/inline-link-icon-click.jsx'

// --- Buttons ---
import ButtonPlain from './framer/button-plain.jsx'
import ButtonRounded from './framer/button-rounded.jsx'
import ButtonLoadMore from './framer/button-load-more.jsx'
import ButtonCartoon from './framer/button-cartoon.jsx'
import ButtonSubmit from './framer/button-submit.jsx'

export default function App() {
  return (
    <div style={{ background: 'rgb(255,253,245)' }}>
      {/* ====== NAV / HEADER ====== */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 30,
          background: '#fff',
          boxShadow: '0 1px 0 rgba(0,0,0,.06)',
        }}
      >
        {/* Brand row */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            padding: '8px 16px',
            maxWidth: 1200,
            margin: '0 auto',
          }}
        >
          <MlLogo.Responsive />
        </div>

        {/* Main navigation */}
        <NavigationBar.Responsive preserveParameters />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 16px 8px' }}>
          <NavigationMenus.Responsive preserveParameters />
          <NavigationMenuText.Responsive preserveParameters />
        </div>
      </header>

      {/* ====== HERO / PROMOS ====== */}
      <main style={{ maxWidth: 1200, margin: '24px auto', padding: '0 16px' }}>
        <section style={{ marginBottom: 24 }}>
          <StaticHeaderx1.Responsive preserveParameters />
        </section>

        <section style={{ marginBottom: 32 }}>
          <SlidingHeaderx3.Responsive preserveParameters />
        </section>

        {/* ====== FEATURED PRODUCT ====== */}
        <section style={{ marginBottom: 48 }}>
          <ProductCardHome.Responsive
            link="/product-list/shop-books"
            preserveParameters
          />
        </section>

        {/* ====== OPTIONAL INLINE LINKS / BUTTONS SHOWCASE ====== */}
        <section style={{ display: 'grid', gap: 12, gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', marginBottom: 48 }}>
          <InlineLinkClick.Responsive preserveParameters />
          <InlineLinkIconClick.Responsive preserveParameters />

          <ButtonPlain.Responsive preserveParameters />
          <ButtonRounded.Responsive preserveParameters />
          <ButtonLoadMore.Responsive preserveParameters />
          <ButtonCartoon.Responsive preserveParameters />
          <ButtonSubmit.Responsive preserveParameters />
        </section>
      </main>

      {/* ====== FOOTER ====== */}
      <footer>
        <FooterCTA.Responsive preserveParameters />
        <Footer.Responsive preserveParameters />
      </footer>
    </div>
  )
}