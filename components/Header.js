import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header>
      <ul className="navigation">
        <motion.li
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 0.7 }}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </motion.li>
        <motion.li
          initial={{ y: -200 }}
          animate={{ y: 0 }}
          transition={{ ease: "easeOut", duration: 1 }}
        >
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </motion.li>
      </ul>
    </header>
  );
}
