export default function InlineLinkIconClick({ children="Inline link", href="#", className="" }) {
  return <a className={`inline-link-icon-click ${className}`} href={href}>{children}</a>;
}

