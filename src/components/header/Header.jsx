import { useState } from "react";

import Favourite from "./Favoirate";
import FavoirateList from "./FavoirateList";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [isFavClick, setIsFavClick] = useState(false);
  return (
    <>
      <header className="fixed w-full top-0 left-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
        <nav className="container flex items-center justify-between py-6">
          <Logo />

          <div className="flex items-center gap-4 relative">
            <Search />

            <Favourite />

            {/* <!-- Modal --> */}
            {isFavClick && <FavoirateList />}
          </div>
        </nav>
      </header>
    </>
  );
}
