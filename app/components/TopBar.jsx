import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import Link from "next/link";

// Topbar links data
export const links = [
  {
    ico: <FiPhone />,
    label: "+91-1234567890",
    link: "#",
  },
  {
    ico: <MdOutlineMailOutline />,
    label: "contact@example.com",
    link: "#",
  },
  {
    ico: <FaWhatsapp />,
    label: "WhatsApp",
    link: "#",
  },
];

// TopBar Component
const TopBar = () => (
  <div className="greenBg text-white text-sm flex justify-end gap-6 px-4 py-4">
    <div className="main_width flex items-center justify-end gap-10 text-[18px]">
      {links.map((data, key) => (
        <span key={key} className="flex items-center gap-2">
          <Link href={data.link} className="flex items-center gap-1">
            {data.ico} {data.label}
          </Link>
        </span>
      ))}
    </div>
  </div>
);

export default TopBar;
