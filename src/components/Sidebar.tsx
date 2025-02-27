import { NavLink, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Receipt,
  Users,
  TrendingUp,
  CreditCard,
  Wallet,
  Settings,
  Shield,
  LogOut,
} from "lucide-react";
import Logo from "../assets/Logo.svg";
import { useState, useEffect } from "react";

const navigation = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/" },
  { name: "Transactions", icon: Receipt, href: "/transactions" },
  { name: "Accounts", icon: Users, href: "/accounts" },
  { name: "Investments", icon: TrendingUp, href: "/investments" },
  { name: "Credit Cards", icon: CreditCard, href: "/credit-cards" },
  { name: "Loans", icon: Wallet, href: "/loans" },
  { name: "Services", icon: Shield, href: "/services" },
  { name: "Settings", icon: Settings, href: "/settings" },
];

interface SidebarProps {
  mobile?: boolean;
  onClose?: () => void;
}

export default function Sidebar({ mobile, onClose }: SidebarProps) {
  const location = useLocation();
  const [activeItem, setActiveItem] = useState("Dashboard");

  useEffect(() => {
    const currentPath = location.pathname;
    const activeNavItem = navigation.find(item => item.href === currentPath)?.name || "Dashboard";
    setActiveItem(activeNavItem);
  }, [location.pathname]);

  const handleClick = (itemName: string) => {
    setActiveItem(itemName);
    if (mobile && onClose) {
      onClose();
    }
  };

  return (
    <div className="flex flex-col w-64 bg-white pl-4">
      <div className="flex flex-col flex-grow pt-5 pb-4 overflow-y-auto border-r">
        <div className="flex items-center flex-shrink-0 px-4">
          <img src={Logo} alt={"Soar Task"} loading="lazy" />
        </div>
        <nav className="flex-1 px-4 mt-10 space-y-4 bg-white">
          {navigation.map((item) => (
            <NavLink
              key={item.name}
              to={item.href}
              onClick={() => handleClick(item.name)}
              className={({ isActive }) =>
                `group flex items-center px-2 py-2 text-sm font-medium rounded-md ${
                  isActive || activeItem === item.name
                    ? "bg-gray-100 text-[#232323]"
                    : "text-[#B1B1B1] hover:bg-gray-50 hover:text-gray-900"
                }`
              }
            >
              <item.icon
                className={`flex-shrink-0 w-6 h-6 mr-3 ${
                  activeItem === item.name 
                    ? "text-[#232323]" 
                    : "text-gray-400 group-hover:text-gray-500"
                }`}
                aria-hidden="true"
              />
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
}
