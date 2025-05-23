import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";
import SidebarMobile from "../../components/Menu/menuMobile";
import ListTable from "../../components/Tabela/listTable";

function Insumos() {
    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <SidebarMobile />
            <main className="w-full h-full overflow-y-auto relative bg-blue-50">
                <Header title="Insumos" />
                <ListTable />
            </main>
        </div>
    )
}

export default Insumos;