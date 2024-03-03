import { useState } from "react";

interface NavLinkProps {
  href: string;
  title: string;
  className?: string;
}

export default function NavLink(props: NavLinkProps) {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <a
      href={props.href}
      className={`font-semibold tracking-wider hover:text-violet-700 ${
        clicked ? "focus:border-1 focus:border-purple-500" : ""
      } ${props.className || ""}`}
      onClick={handleClick}
    >
      {props.title}
    </a>
  );
}
