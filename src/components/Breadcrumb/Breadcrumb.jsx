import { Link, useLocation } from "react-router-dom";

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split("/").filter((x) => x);

  return (
    <nav className="text-lg text-gray-600 py-4">
      <ul className="flex items-center space-x-2">
        {/* Home Link */}
        <li>
          <Link
            to="/"
            className={`text-lg font-medium ${
              location.pathname === "/"
                ? "text-buttonColor"
                : "text-headingColor"
            }`}
          >
            Home
          </Link>
        </li>

        {/* Dynamically generated breadcrumb links */}
        {pathnames.map((value, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`;
          const isLast = index === pathnames.length - 1;

          return (
            <li key={routeTo} className="flex gap-1 items-center">
              <span>/</span>
              {isLast ? (
                <span className="text-buttonColor capitalize">
                  {value.replace("-", " ")}
                </span>
              ) : (
                <Link
                  to={routeTo}
                  className={`text-lg font-normal ${
                    location.pathname === routeTo
                      ? "text-buttonColor"
                      : "text-headingColor"
                  }  `}
                >
                  {value.replace("-", " ")}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
