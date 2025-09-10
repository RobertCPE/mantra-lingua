// src/App.jsx
// Styles are inside src/framer, so this path is correct:
import './framer/styles.css'

// === IMPORT components (names can be anything on the left) ===
// Tip: the path uses the file name WITHOUT ".jsx"
import ProductCardHome from './framer/product-card-home'
import ButtonLoadMore from './framer/button-load-more'
import ButtonCartoon from './framer/button-cartoon'
import CountdownTimer from './framer/countdown-timer'
import InlineLinkIconClick from './framer/inline-link-icon-click'
import YouTubeEmbed from './framer/you-tube'
import DeliveryOptionsComplete from './framer/delivery-options-complete'
// Nested folder example:
import ProductImage from './framer/product-page/product-image'
// Big composite example (can be heavy):
import ApplicationPortal from './framer/application-portal'

export default function App() {
  return (
    <div style={{ padding: 32, maxWidth: 1200 }}>
      <h1 style={{ marginBottom: 24 }}>Mantra Lingua – Framer Export</h1>

      {/* CARD + BUTTON (what you already had) */}
      <section style={{ marginBottom: 48 }}>
        <ProductCardHome.Responsive
          link="/product-list/shop-books"
          preserveParameters
        />
        <div style={{ marginTop: 16 }}>
          <ButtonLoadMore.Responsive />
        </div>
      </section>

      {/* MORE COMPONENTS RENDERED BELOW */}
      <section style={{ display: 'grid', gap: 24, gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', marginBottom: 48 }}>
        <div><ButtonCartoon.Responsive /></div>
        <div><CountdownTimer.Responsive /></div>
        <div><InlineLinkIconClick.Responsive /></div>
        <div><YouTubeEmbed.Responsive /></div>
        <div><DeliveryOptionsComplete.Responsive /></div>
        <div><ProductImage.Responsive /></div>
      </section>

      {/* Optional: big composite – comment out if it feels slow */}
      <section style={{ marginBottom: 48 }}>
        <ApplicationPortal.Responsive />
      </section>
    </div>
  )
}