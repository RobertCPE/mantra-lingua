export default function ButtonPlain({ children="Button", href, onClick, type="button", className="" }) {
  const cls = `button-plain ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}

