// src/App.jsx
import './framer/styles.css'

// --- Always import nav explicitly so it's guaranteed to render:
import NavigationBar from './framer/navigation-bar.jsx'
import NavigationMenus from './framer/navigation-menus.jsx'
import NavigationMenuText from './framer/navigation-menu-text.jsx'

// Auto-import every .jsx inside src/framer and its subfolders (e.g. product-page/*)
const modules = import.meta.glob('./framer/**/*.jsx', { eager: true })

// Filenames we will EXCLUDE from auto-list because we render them explicitly
const EXCLUDE = new Set([
  'navigation-bar.jsx',
  'navigation-menus.jsx',
  'navigation-menu-text.jsx',
])

// Turn modules into an ordered list of { path, file, Comp }
const exported = Object.entries(modules)
  .map(([path, mod]) => {
    const file = path.split('/').pop() // e.g., "product-card-home.jsx"
    return { path, file, Comp: mod?.default }
  })
  // keep only modules with a default export that has a .Responsive variant
  .filter(x => x.Comp && x.Comp.Responsive && !EXCLUDE.has(x.file))

// Optional: put some commonly-viewed components earlier; everything else alphabetical
const preferredOrder = [
  'static-headerx1.jsx',
  'sliding-headerx3.jsx',
  'footer.jsx',
  'product-card-home.jsx',
  'product-card-information.jsx',
  'product-card-blog.jsx',
]

const byPreferredOrder = (a, b) => {
  const ai = preferredOrder.indexOf(a.file)
  const bi = preferredOrder.indexOf(b.file)
  const aI = ai === -1 ? Number.MAX_SAFE_INTEGER : ai
  const bI = bi === -1 ? Number.MAX_SAFE_INTEGER : bi
  return aI - bI || a.file.localeCompare(b.file)
}

const components = exported.sort(byPreferredOrder)

export default function App() {
  return (
    <div style={{ minHeight: '100vh', background: 'rgb(255,253,245)' }}>
      {/* Sticky site header with explicit nav so it never disappears */}
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: '#fff',
          borderBottom: '1px solid rgba(0,0,0,0.06)',
        }}
      >
        <NavigationBar.Responsive preserveParameters />
        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '8px 16px' }}>
          <NavigationMenus.Responsive preserveParameters />
          <NavigationMenuText.Responsive preserveParameters />
        </div>
      </header>

      {/* Quick debug list so you can see what auto-loaded */}
      <div style={{ maxWidth: 1200, margin: '16px auto', padding: '0 16px' }}>
        <details>
          <summary style={{ cursor: 'pointer' }}>
            Loaded components ({components.length})
          </summary>
          <ul style={{ columns: 2, marginTop: 8 }}>
            {components.map(({ file }) => (
              <li key={file} style={{ fontFamily: 'monospace' }}>{file}</li>
            ))}
          </ul>
        </details>
      </div>

      {/* Render all other components */}
      <main
        style={{
          maxWidth: 1200,
          margin: '16px auto 48px',
          padding: '0 16px',
          display: 'grid',
          gap: 24,
        }}
      >
        {components.map(({ path, Comp, file }) => (
          <section
            key={path}
            style={{
              background: '#fff',
              borderRadius: 12,
              boxShadow: '0 2px 12px rgba(0,0,0,.06)',
              padding: 16,
            }}
          >
            <h3
              style={{
                margin: '0 0 12px',
                fontSize: 16,
                fontFamily: 'monospace',
                opacity: 0.7,
              }}
            >
              {file}
            </h3>
            <Comp.Responsive preserveParameters />
          </section>
        ))}
      </main>
    </div>
  )
}