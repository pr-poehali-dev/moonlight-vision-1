import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  className?: string;
  variant?: "light" | "dark";
}

export default function Header({ className, variant = "light" }: HeaderProps) {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  
  const textColor = variant === "dark" || !isHomePage ? "text-gray-900" : "text-white";
  const hoverColor = variant === "dark" || !isHomePage ? "hover:text-blue-600" : "hover:text-neutral-400";
  const headerBg = !isHomePage ? "bg-white shadow-sm" : "";
  const headerPosition = isHomePage ? "absolute" : "sticky";

  return (
    <header className={`${headerPosition} top-0 left-0 right-0 z-50 p-4 lg:p-6 ${headerBg} ${className ?? ""}`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className={`${textColor} text-lg lg:text-xl font-bold tracking-wide`}>
          ООО "Аэрофон"
        </Link>
        <div className="flex flex-col items-end gap-2">
          <div className="text-sm lg:text-base font-semibold ${textColor}">
            Оповещатели мощные 120 дБ
          </div>
          <nav className="flex flex-wrap gap-4 lg:gap-6 justify-end">
            <Link
              to="/products"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              Продукция
            </Link>
            <Link
              to="/products"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              Наши разработки
            </Link>
            <Link
              to="/news"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              Новости
            </Link>
            <Link
              to="/contacts"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              Контакты
            </Link>
            <Link
              to="/services"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              Услуги
            </Link>
            <Link
              to="/about"
              className={`${textColor} ${hoverColor} transition-colors duration-300 text-sm lg:text-base`}
            >
              О компании
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}