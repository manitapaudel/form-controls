import LinkItem from "../../atoms/LinkItem";
import Style from "./navbar.module.scss";

const navItems = [
  {
    name: "Basic HTML Form",
    href: "/basic-form",
  },
  {
    name: "Formik Form",
    href: "/formik-form",
  },
  {
    name: "React Hook Form",
    href: "/react-hook-form",
  },
];

const Navbar = () => {
  return (
    <div className={Style.navbar}>
      {navItems.map(({ name, href }) => (
        <LinkItem href={href} key={href}>
          {name}
        </LinkItem>
      ))}
    </div>
  );
};

export default Navbar;
