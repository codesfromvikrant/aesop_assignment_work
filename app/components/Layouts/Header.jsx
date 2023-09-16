import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="text-primary font-semibold text-sm flex justify-between items-center py-8 px-8 border-[1px] border-gray-300">
      <nav>
        <ul className="flex justify-start items-center gap-6">
          <li>
            <Link href="#">Skin Care</Link>
          </li>
          <li>
            <Link href="#">Body & Hand</Link>
          </li>
          <li>
            <Link href="#">Hair</Link>
          </li>
          <li>
            <Link href="#">Fragrance</Link>
          </li>
          <li>
            <Link href="#">Home</Link>
          </li>
          <li>
            <Link href="#">Kits & Travel</Link>
          </li>
          <li>
            <Link href="#">Gifts</Link>
          </li>
          <li>
            <Link href="#">Read</Link>
          </li>
          <li>
            <Link href="#">Stores</Link>
          </li>
          <li>
            <Link href="#">Facial Appointment</Link>
          </li>
        </ul>
      </nav>
      <nav>
        <ul className="flex justify-start items-center gap-6">
          <li>
            <Link href="#">Login</Link>
          </li>
          <li>
            <Link href="#">Cabinet</Link>
          </li>
          <li>
            <Link href="#">Cart</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
