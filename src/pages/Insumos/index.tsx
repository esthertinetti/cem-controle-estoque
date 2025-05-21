import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";
import SidebarMobile from "../../components/Menu/menuMobile";

function Insumos() {
    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <SidebarMobile />
            <main className="w-full h-full overflow-y-auto relative">
                <Header title="Insumos" />
            </main>
        </div>
    )
}

export default Insumos;