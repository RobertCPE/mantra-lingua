export default function ButtonCartoon({ children="Button", href, onClick, type="button", className="" }) {
  const cls = `button-cartoon ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}

