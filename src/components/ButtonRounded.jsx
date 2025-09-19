export default function ButtonRounded({ children="Button", href, onClick, type="button", className="" }) {
  const cls = `button-rounded ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}

