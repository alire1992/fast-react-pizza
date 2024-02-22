import { Link } from "react-router-dom";

export default function Button({
  children,
  disabled = false,
  to,
  type = "primary",
  onClick,
}) {
  const base = `inline-block text-sm rounded-full 
            font-semibold uppercase
            tracking-wide text-slate-800 transition-colors duration-300
            focus:outline-none
             focus:ring  
            focus:ring-offset-2 disabled:cursor-not-allowed `;

  const yellowBg = `bg-yellow-400 hover:bg-yellow-300 focus:bg-yellow-300
                     focus:ring-yellow-300 disabled:bg-yellow-200 `;

  const redBg = `bg-red-500 hover:bg-red-400 focus:bg-red-400
                     focus:ring-red-400 disabled:bg-red-300 `;

  const transparentBg = `bg-tranparent border-2 border-stone-300 hover:bg-stone-300 focus:bg-stone-300
                         focus:ring-stone-300 disabled:bg-stone-200 text-stone-400
                          focus:text-stone-800 hover:text-stone-800 `;

  const styles = {
    primary: base + yellowBg + `px-4 py-3 md:px-6 md:py-4`,
    small: base + yellowBg + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    round: base + yellowBg + "px-2.5 py-1 md:px-3.5 md:py-2 text-sm",
    delete: base + redBg + "px-4 py-2 md:px-5 md:py-2.5 text-xs",
    secondary: base + transparentBg + "px-4 py-3 md:px-2.5 md:py-3.5",
  };

  if (to)
    return (
      <Link className={styles[type]} to={to}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button disabled={disabled} className={styles[type]} onClick={onClick}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}
