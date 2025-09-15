// src/App.jsx
import './framer/styles.css'

// 1) Eager-import every Framer component (.jsx) under src/framer and subfolders
const modules = import.meta.glob('./framer/**/*.jsx', { eager: true })

// 2) Keep only components that export default with a .Responsive variant
const all = Object.entries(modules)
  .map(([path, mod]) => ({ path, Comp: mod.default }))
  .filter(x => x?.Comp && x.Comp?.Responsive)

// 3) Friendly labels from filenames/paths
const labelFromPath = (p) => {
  // e.g. "./framer/check-out/payment-method-choose-payment.jsx"
  const trimmed = p.replace(/^\.\/framer\//, '')
  const name = trimmed.replace(/\.jsx$/, '')
  return name
    .split('/')
    .map(seg =>
      seg
        .replace(/-/g, ' ')
        .replace(/\b\w/g, c => c.toUpperCase())
    )
    .join(' / ')
}

// 4) Buckets to control rough ordering in the gallery
const BUCKETS = [
  // Layout & brand
  { key: 'ui/',                          weight: 5 },
  { key: '/ml-logo.jsx',                 weight: 8 },

  // Navigation
  { key: '/navigation-bar.jsx',          weight: 10 },
  { key: '/navigation-menus.jsx',        weight: 11 },
  { key: '/navigation-menu-text.jsx',    weight: 12 },

  // Hero / headers
  { key: '/static-headerx1.jsx',         weight: 20 },
  { key: '/sliding-headerx3.jsx',        weight: 21 },

  // Product & PDP
  { key: 'product-page/',                weight: 30 },
  { key: '/product.jsx',                 weight: 31 },
  { key: '/product-card-',               weight: 32 },
  { key: '/check-out-product-timer',     weight: 33 },

  // Checkout / forms / account
  { key: '/order-review.jsx',            weight: 40 },
  { key: '/order-summary.jsx',           weight: 41 },
  { key: '/verification-code-input.jsx', weight: 42 },
  { key: '/company-registration-input.jsx', weight: 43 },
  { key: '/delivery-details.jsx',        weight: 44 },
  { key: '/delivery-information-',       weight: 45 },
  { key: '/delivery-options-',           weight: 46 },
  { key: '/payment-selections-dashboard.jsx', weight: 47 },
  { key: '/payment-selections.jsx',      weight: 48 },
  { key: '/payment-method.jsx',          weight: 49 },
  { key: 'check-out/payment-method-choose-payment.jsx', weight: 50 },
  { key: '/payment.jsx',                 weight: 51 },
  { key: '/toggle.jsx',                  weight: 52 },
  { key: '/checkbox.jsx',                weight: 53 },
  { key: '/radio-button.jsx',            weight: 54 },
  { key: '/sign-in.jsx',                 weight: 55 },
  { key: '/settings.jsx',                weight: 56 },
  { key: '/inbox.jsx',                   weight: 57 },

  // Links & buttons
  { key: '/inline-link',                 weight: 60 },
  { key: '/button-',                     weight: 61 },

  // Misc content
  { key: '/language-dropdown.jsx',       weight: 70 },
  { key: '/languages-pods-with-selector.jsx', weight: 71 },
  { key: '/you-tube.jsx',                weight: 72 },
  { key: '/tilt-card.jsx',               weight: 73 },
  { key: '/accordion.jsx',               weight: 74 },
  { key: '/create-me-fully.jsx',         weight: 75 },
  { key: '/main-dashboard.jsx',          weight: 76 },
  { key: '/application-portal',          weight: 77 }, // group of portal components
  { key: '/completion-alert.jsx',        weight: 78 },

  // Footers
  { key: '/footer-cta.jsx',              weight: 90 },
  { key: '/footer.jsx',                  weight: 91 },
]

// Assign a weight for sorting
const weightFor = (path) => {
  for (const b of BUCKETS) {
    if (path.includes(b.key)) return b.weight
  }
  return 999 // unknowns at the end
}

const items = all
  .map(x => ({ ...x, weight: weightFor(x.path), label: labelFromPath(x.path) }))
  .sort((a, b) => a.weight - b.weight || a.path.localeCompare(b.path))

function Section({ title, children }) {
  return (
    <section style={{ margin: '28px 0' }}>
      <h2
        style={{
          fontFamily: '"General Sans", ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif',
          fontWeight: 800,
          fontSize: '22px',
          lineHeight: '28px',
          letterSpacing: '-0.01em',
          margin: '0 0 14px',
          color: '#0f172a'
        }}
      >
        {title}
      </h2>
      <div
        style={{
          background: '#fff',
          borderRadius: 12,
          boxShadow: '0 1px 2px rgba(0,0,0,.05), 0 10px 30px rgba(2,6,23,.06)',
          padding: 20
        }}
      >
        {children}
      </div>
    </section>
  )
}

export default function App() {
  return (
    <div style={{ background: 'rgb(255,253,245)', padding: 24, maxWidth: 1200, margin: '0 auto' }}>
      {items.map(({ path, label, Comp }) => (
        <Section key={path} title={label}>
          <Comp.Responsive preserveParameters />
        </Section>
      ))}
    </div>
  )
}