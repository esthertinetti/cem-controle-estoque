import SidebarMobile from "../Menu/menuMobile";
import Profile from "./profile";

interface HeaderTitles {
    title: string
}


function Header ({title} : HeaderTitles) {
    return (
        <header className="z-10 top-0 right-0 sticky bg-white flex justify-between items-center p-2 lg:p-3 xl:p-6 md:pb-4 shadow-md">
            <div className="block md:hidden">
                <SidebarMobile />
            </div>
            <div className="text-xl md:text-2xl lg:text-4xl leading-[50px]">
                <h1 className="font-semibold text[#151D48]">
                    {title}
                </h1>
            </div>
            <Profile />
        </header>
    )
}

export default Header;