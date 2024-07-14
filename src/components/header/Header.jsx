import { Image, Link, NavbarIcon } from "../exports";

function Header() {
  return (
    <nav className="max-w-7xl m-auto">
      <div className="flex justify-between items-center py-6">
        <h3 className="font-semibold text-lg flex items-center">
          <Image src={NavbarIcon} />
        </h3>

        {/* All Navigation Links */}
        <div className="flex items-center gap-12">
          <Link href="/">Home</Link>
          <Link href="/features">Features</Link>
          <Link href="/product">Product</Link>
          <Link href="/clients">Clients</Link>
        </div>
      </div>
    </nav>
  );
}

export default Header;
