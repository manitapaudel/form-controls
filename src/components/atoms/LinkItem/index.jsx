import { Link, useLocation } from "react-router-dom";

import Style from "./link-item.module.scss";

const LinkItem = ({ href, children }) => {
  const location = useLocation();
  console.log(location);
  return (
    <Link
      to={href}
      className={`${Style.link} ${
        location.pathname === href ? Style.activeLink : ""
      }`}
    >
      {children}
    </Link>
  );
};

export default LinkItem;
