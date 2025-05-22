import TopBar from "./TopBar";
import NavMenu from "./NavMenu";
import Image from "next/image";
import Link from "next/link";

const Header = ({ logoUrl = "/logo.png", currentPath }) => (
  console.log(currentPath),
  (
    <header className="border-b border-gray-200 shadow">
      <div className="lg:block hidden">
        <TopBar />
      </div>
      <div className="flex main_width items-center justify-between  py-2">
        <Link href="./">
          <div className="relative  lg:w-[220px] md:w-[180px] w-[150px] md:h-[90px] h-[80px] ">
            <Image
              src={logoUrl}
              alt="Ground Connect Logo"
              fill
              sizes="100%"
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </Link>

        <div className="lg:block hidden">
          <NavMenu pathname={currentPath} />
        </div>
      </div>
    </header>
  )
);

export default Header;
