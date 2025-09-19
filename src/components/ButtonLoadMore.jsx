export default function ButtonLoadMore({ children="Button", href, onClick, type="button", className="" }) {
  const cls = `button-load-more ${className}`;
  return href ? (
    <a className={cls} href={href} onClick={onClick}>{children}</a>
  ) : (
    <button className={cls} type={type} onClick={onClick}>{children}</button>
  );
}

