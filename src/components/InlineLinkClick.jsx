export default function InlineLinkClick({ children="Inline link", href="#", className="" }) {
  return <a className={`inline-link-click ${className}`} href={href}>{children}</a>;
}

