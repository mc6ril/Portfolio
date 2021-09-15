import Link from "next/link";

export default function Header() {
  return (
    <header>
      <ul className="navigation">
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/resume">
            <a>CV</a>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </li>
      </ul>
    </header>
  );
}
