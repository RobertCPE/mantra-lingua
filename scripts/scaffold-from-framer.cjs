/* scripts/scaffold-from-framer.js
 * Batch-generate prop-driven React components from Framer-exported filenames.
 *
 * WHAT IT DOES
 * - For each entry in COMPONENT_MAP, creates src/components/<Name>.jsx
 * - Gives it a clean, consistent prop API (no unframer/motion, no .Responsive)
 * - Adds useful defaultProps so it renders immediately
 * - Preserves a className prop so styling is easy to override
 *
 * HOW TO RUN (from repo root):
 *   node scripts/scaffold-from-framer.js
 *
 * After generation:
 *   - Import these components in src/App.jsx instead of src/framer/* files
 *   - Remove corresponding framer imports/usages incrementally
 */

const fs = require('fs');
const path = require('path');

const outDir = path.resolve(__dirname, '..', 'src', 'components');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

/** Shared tiny helpers used by many components */
const COMMON_HELPERS = `
/** Generic media block used in several components */
export function Media({ src, alt, ratio = "16/9", className = "" }) {
  return (
    <div className={\`media \${className}\`} style={{ aspectRatio: ratio, overflow: "hidden", borderRadius: 12 }}>
      {src ? <img src={src} alt={alt || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} /> : <div style={{background:"#eee", width:"100%", height:"100%"}}/>}
    </div>
  );
}
`;

/** Map each Framer file to a clean React component with a standard prop API */
const COMPONENT_MAP = [
  // Containers
  { name: 'OuterContainer', file: 'ui/outer-container.jsx', kind: 'container' },
  { name: 'InnerContainer', file: 'ui/inner-container.jsx', kind: 'container' },

  // Brand & Nav
  { name: 'MlLogo', file: 'ml-logo.jsx', kind: 'image' },
  { name: 'NavigationBar', file: 'navigation-bar.jsx', kind: 'nav' },
  { name: 'NavigationMenus', file: 'navigation-menus.jsx', kind: 'navMenu' },
  { name: 'NavigationMenuText', file: 'navigation-menu-text.jsx', kind: 'textOnlyMenu' },

  // Headers / Promos
  { name: 'StaticHeader', file: 'static-headerx1.jsx', kind: 'header' },
  // SlidingHeaderx3 was removed by you, so we don’t scaffold it.

  // Product & cards
  { name: 'Product', file: 'product.jsx', kind: 'productBase' },
  { name: 'ProductCardHome', file: 'product-card-home.jsx', kind: 'productCard' },
  { name: 'ProductCardIndex', file: 'product-card-index.jsx', kind: 'productCard' },
  { name: 'ProductCardInformation', file: 'product-card-information.jsx', kind: 'productCard' },
  { name: 'ProductCardBlog', file: 'product-card-blog.jsx', kind: 'productCard' },
  { name: 'ProductCardUpsell', file: 'product-card-upsell.jsx', kind: 'productCard' },
  { name: 'ProductCardUpsellSet', file: 'product-card-upsell-set.jsx', kind: 'productCard' },
  { name: 'ProductPageImage', file: 'product-page/product-image.jsx', kind: 'mediaOnly' },

  // Footer
  { name: 'FooterCTA', file: 'footer-cta.jsx', kind: 'footerCta' },
  { name: 'Footer', file: 'footer.jsx', kind: 'footer' },

  // Buttons / links / inputs
  { name: 'ButtonPlain', file: 'button-plain.jsx', kind: 'button' },
  { name: 'ButtonRounded', file: 'button-rounded.jsx', kind: 'button' },
  { name: 'ButtonLoadMore', file: 'button-load-more.jsx', kind: 'button' },
  { name: 'ButtonCartoon', file: 'button-cartoon.jsx', kind: 'button' },
  { name: 'ButtonSubmit', file: 'button-submit.jsx', kind: 'button' },
  { name: 'InlineLinkClick', file: 'inline-link-click.jsx', kind: 'link' },
  { name: 'InlineLinkIconClick', file: 'inline-link-icon-click.jsx', kind: 'link' },
  { name: 'RadioButton', file: 'radio-button.jsx', kind: 'radio' },
  { name: 'Checkbox', file: 'checkbox.jsx', kind: 'checkbox' },
  { name: 'LanguageDropdown', file: 'language-dropdown.jsx', kind: 'dropdown' },

  // Checkout/Orders/Forms (you can keep or prune as needed)
  { name: 'CheckoutTimerDeliveryEdit', file: 'check-out-product-timer-delivery-edit.jsx', kind: 'panel' },
  { name: 'PaymentMethodChoose', file: 'check-out/payment-method-choose-payment.jsx', kind: 'panel' },
  { name: 'OrderReview', file: 'order-review.jsx', kind: 'panel' },
  { name: 'OrderSummary', file: 'order-summary.jsx', kind: 'panel' },
  { name: 'CommunicationPreferences', file: 'communication-preferences.jsx', kind: 'panel' },
  { name: 'CompanyRegistrationInput', file: 'company-registration-input.jsx', kind: 'formRow' },
  { name: 'EnterDetails', file: 'enter-details.jsx', kind: 'formSection' },
  { name: 'DeliveryOptionsEnter', file: 'delivery-options-enter.jsx', kind: 'formSection' },
  { name: 'PaymentSelections', file: 'payment-selections.jsx', kind: 'panel' },
  { name: 'PaymentSelectionsDashboard', file: 'payment-selections-dashboard.jsx', kind: 'panel' },
  { name: 'PaymentMethod', file: 'payment-method.jsx', kind: 'panel' },
];

/** Tiny code templates for each kind */
function tplContainer(name) {
  return `
export default function ${name}({ children, className = "", style }) {
  return (
    <div className={\`${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} \${className}\`} style={style}>
      {children}
    </div>
  );
}
`;
}

function tplImage(name) {
  return `
export default function ${name}({ src = "/assets/logo.svg", alt = "Logo", className = "", width, height }) {
  return <img className={className} src={src} alt={alt} width={width} height={height} />;
}
`;
}

function tplHeader(name) {
  return `
export default function ${name}({
  eyebrow = "New",
  headline = "Welcome to Mantra Lingua",
  body = "Beautifully designed, prop-driven header component.",
  ctaLabel = "Learn more",
  href = "#",
  className = ""
}) {
  return (
    <header className={\`${name.toLowerCase()} \${className}\`}>
      {eyebrow && <p className="${name.toLowerCase()}__eyebrow">{eyebrow}</p>}
      {headline && <h1 className="${name.toLowerCase()}__headline">{headline}</h1>}
      {body && <p className="${name.toLowerCase()}__body">{body}</p>}
      {ctaLabel && href && <a className="${name.toLowerCase()}__cta" href={href}>{ctaLabel}</a>}
    </header>
  );
}
`;
}

function tplNav(name) {
  return `
export default function ${name}({
  logoUrl = "/assets/logo.svg",
  items = [{ label: "Home", href: "/" }, { label: "Shop", href: "/shop" }],
  onItemClick,
  className = ""
}) {
  return (
    <nav className={\`${name.toLowerCase()} \${className}\`}>
      <a href="/"><img src={logoUrl} alt="Logo" height="28" /></a>
      <ul>
        {items.map((it, i) => (
          <li key={it.href || i}>
            <a href={it.href} onClick={(e) => onItemClick?.(e, it)}>{it.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
`;
}

function tplNavMenu(name) {
  return `
export default function ${name}({
  groups = [
    { title: "Books", links: [{label:"0–4 Years", href:"/books/0-4"}, {label:"5–7 Years", href:"/books/5-7"}] },
    { title: "Resources", links: [{label:"Teacher guides", href:"/guides"}] }
  ],
  className = ""
}) {
  return (
    <div className={\`${name.toLowerCase()} \${className}\`}>
      {groups.map((g, i) => (
        <section key={g.title || i}>
          {g.title && <h4>{g.title}</h4>}
          <ul>{g.links?.map((l, j) => <li key={l.href || j}><a href={l.href}>{l.label}</a></li>)}</ul>
        </section>
      ))}
    </div>
  );
}
`;
}

function tplTextOnlyMenu(name) {
  return `
export default function ${name}({ items = [{ label:"Item", href:"#"}], className = "" }) {
  return (
    <ul className={\`${name.toLowerCase()} \${className}\`}>
      {items.map((it,i) => <li key={it.href || i}><a href={it.href}>{it.label}</a></li>)}
    </ul>
  );
}
`;
}

function tplProductBase(name) {
  return `
export default function ${name}({ title="Product", children, className = "" }) {
  return (
    <section className={\`${name.toLowerCase()} \${className}\`}>
      <h3>{title}</h3>
      <div>{children}</div>
    </section>
  );
}
`;
}

function tplProductCard(name) {
  return `
import { Media } from "./_common";
export default function ${name}({
  title = "Sample title",
  subtitle = "Short description",
  price = "£12.99",
  imageUrl = "/assets/placeholder.jpg",
  href = "#",
  ctaLabel = "View",
  className = "",
  onClick
}) {
  return (
    <article className={\`${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} \${className}\`}>
      <a href={href} onClick={onClick} className="block">
        <Media src={imageUrl} alt={title} ratio="4/3" />
        <div className="${name.toLowerCase()}__body">
          <h3 className="${name.toLowerCase()}__title">{title}</h3>
          {subtitle && <p className="${name.toLowerCase()}__subtitle">{subtitle}</p>}
          {price && <p className="${name.toLowerCase()}__price">{price}</p>}
          <span className="${name.toLowerCase()}__cta">{ctaLabel}</span>
        </div>
      </a>
    </article>
  );
}
`;
}

function tplMediaOnly(name) {
  return `
import { Media } from "./_common";
export default function ${name}({ imageUrl="/assets/placeholder.jpg", alt="Product image", className="" }) {
  return <Media src={imageUrl} alt={alt} className={className} ratio="1/1" />;
}
`;
}

function tplFooterCta(name) {
  return `
export default function ${name}({
  title="Personalize your book with a pronunciation of the language",
  body="Example footer CTA block.",
  ctaLabel="Get started",
  href="#",
  className = ""
}) {
  return (
    <section className={\`${name.toLowerCase()} \${className}\`}>
      <h3>{title}</h3>
      {body && <p>{body}</p>}
      {ctaLabel && href && <a className="${name.toLowerCase()}__cta" href={href}>{ctaLabel}</a>}
    </section>
  );
}
`;
}

function tplFooter(name) {
  return `
export default function ${name}({
  columns = [
    { title:"Shop", links:[{label:"Books", href:"/shop-books"}]},
    { title:"Support", links:[{label:"Contact", href:"/contact"}]}
  ],
  legal = "© Mantra Lingua",
  className = ""
}) {
  return (
    <footer className={\`${name.toLowerCase()} \${className}\`}>
      <div className="${name.toLowerCase()}__grid">
        {columns.map((col, i) => (
          <section key={col.title || i}>
            {col.title && <h4>{col.title}</h4>}
            <ul>{col.links?.map((l,j)=><li key={l.href || j}><a href={l.href}>{l.label}</a></li>)}</ul>
          </section>
        ))}
      </div>
      <div className="${name.toLowerCase()}__legal">{legal}</div>
    </footer>
  );
}
`;
}

function tplButton(name) {
  return `
export default function ${name}({ children="Button", href, onClick, type="button", className="" }) {
  const cls = \`${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} \${className}\`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}
`;
}

function tplLink(name) {
  return `
export default function ${name}({ children="Inline link", href="#", className="" }) {
  return <a className={\`${name.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase()} \${className}\`} href={href}>{children}</a>;
}
`;
}

function tplRadio(name) {
  return `
export default function ${name}({ name="group", value="a", label="Option", checked=false, onChange, className="" }) {
  return (
    <label className={\`${name.toLowerCase()} \${className}\`}>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
`;
}

function tplCheckbox(name) {
  return `
export default function ${name}({ label="Accept", checked=false, onChange, className="" }) {
  return (
    <label className={\`${name.toLowerCase()} \${className}\`}>
      <input type="checkbox" checked={checked} onChange={onChange} />
      <span>{label}</span>
    </label>
  );
}
`;
}

function tplDropdown(name) {
  return `
export default function ${name}({ label="Language", value="en", options=[{label:"English", value:"en"}], onChange, className="" }) {
  return (
    <label className={\`${name.toLowerCase()} \${className}\`}>
      <span>{label}</span>
      <select value={value} onChange={e => onChange?.(e.target.value)}>
        {options.map((o,i) => <option key={o.value || i} value={o.value}>{o.label}</option>)}
      </select>
    </label>
  );
}
`;
}

function tplPanel(name) {
  return `
export default function ${name}({ title="${name}", children, className = "" }) {
  return (
    <section className={\`${name.toLowerCase()} \${className}\`}>
      <h3>{title}</h3>
      {children || <p>Connect to real data / form state here.</p>}
    </section>
  );
}
`;
}

function tplFormRow(name) {
  return `
export default function ${name}({ label="${name}", name="field", value="", onChange, placeholder="", className="" }) {
  return (
    <label className={\`${name.toLowerCase()} \${className}\`}>
      <span>{label}</span>
      <input name={name} value={value} onChange={e=>onChange?.(e.target.value)} placeholder={placeholder} />
    </label>
  );
}
`;
}

function tplFormSection(name) {
  return `
export default function ${name}({ title="${name}", children, className="" }) {
  return (
    <fieldset className={\`${name.toLowerCase()} \${className}\`}>
      <legend>{title}</legend>
      {children}
    </fieldset>
  );
}
`;
}

function codeFor(kind, name) {
  switch (kind) {
    case 'container': return tplContainer(name);
    case 'image': return tplImage(name);
    case 'nav': return tplNav(name);
    case 'navMenu': return tplNavMenu(name);
    case 'textOnlyMenu': return tplTextOnlyMenu(name);
    case 'header': return tplHeader(name);
    case 'productBase': return tplProductBase(name);
    case 'productCard': return tplProductCard(name);
    case 'mediaOnly': return tplMediaOnly(name);
    case 'footerCta': return tplFooterCta(name);
    case 'footer': return tplFooter(name);
    case 'button': return tplButton(name);
    case 'link': return tplLink(name);
    case 'radio': return tplRadio(name);
    case 'checkbox': return tplCheckbox(name);
    case 'dropdown': return tplDropdown(name);
    case 'panel': return tplPanel(name);
    case 'formRow': return tplFormRow(name);
    case 'formSection': return tplFormSection(name);
    default: return tplPanel(name);
  }
}

function pascalFile(name) {
  return path.resolve(outDir, `${name}.jsx`);
}

function ensureCommonHelpers() {
  const p = path.resolve(outDir, '_common.jsx');
  if (!fs.existsSync(p)) fs.writeFileSync(p, COMMON_HELPERS.trimStart(), 'utf8');
}

function run() {
  ensureCommonHelpers();
  COMPONENT_MAP.forEach(({ name, kind }) => {
    const code = codeFor(kind, name).trimStart() + '\n';
    fs.writeFileSync(pascalFile(name), code, 'utf8');
    console.log(`✔ wrote src/components/${name}.jsx`);
  });
  console.log('\nDone. Now switch App.jsx to use src/components/* and delete matching framer imports/usages.');
}

run();