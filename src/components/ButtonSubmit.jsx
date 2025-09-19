export default function ButtonSubmit({ children="Button", href, onClick, type="button", className="" }) {
  const cls = `button-submit ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}

