import { HamburgerMenuIcon, Image, Link, NavbarIcon } from "../exports";

function Header() {
  return (
    <nav className="max-w-7xl m-auto px-6 sm:px-16">
      <div className="flex justify-between items-center py-6">
        <h3 className="font-semibold text-lg flex items-center">
          <Image src={NavbarIcon} />
        </h3>

        {/* All Navigation Links */}
        <div className="hidden md:flex items-center gap-12">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/product">Product</Link>
          <Link href="/clients">Clients</Link>
        </div>

        {/* Hamburger menu for mobile view */}
        <div className="block md:hidden">
          <Image src={HamburgerMenuIcon} alt="hamburger menu icon" />
        </div>
      </div>
    </nav>
  );
}

export default Header;
