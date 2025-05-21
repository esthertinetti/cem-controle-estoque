import { NavLink } from "react-router-dom";
import { MenuItemType } from "../../types/Menu";

interface MenuItemProps {
    item: MenuItemType;
}

function MenuItem({ item }: MenuItemProps) {
    return (
        <NavLink
            to={item.href}
            className={({ isActive }) => `py-4 px-6 flex items-center mb-6 transition-all max-w-64 text-white font-semibold text-lg leading-7 rounded-xl ${isActive ? "bg-[#0A2186] " : ""} hover:bg-[#0A2186]`}
        >
            <span className="mr-6 w-6">{item.icon}</span>
            <span>{item.label}</span>
        </NavLink>
    );
}

export default MenuItem;
