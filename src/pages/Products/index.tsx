import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";
import SidebarMobile from "../../components/Menu/menuMobile";
import ListTable from "../../components/Tabela/listTable";

function Massas() {

    const massas = [
        {codigo: "MAS001", descricao: "Massa",              peso: "500g", estoque: 45},
        {codigo: "MAS002", descricao: "Massa - Pastelaria", peso: "1Kg",  estoque: 38},
        {codigo: "MAS003", descricao: "Massa - Mercado",    peso: "1Kg",  estoque: 17},
        {codigo: "MAS004", descricao: "Lazanha",            peso: "500g", estoque: 23},
        {codigo: "MAS005", descricao: "Disco",              peso: "400g", estoque: 36},
    ]

    const titulos = [
        {titulo: "Código",    estilo: "text-center" },
        {titulo: "Descrição", estilo: "text-left"   },
        {titulo: "Peso",      estilo: "text-center" },
        {titulo: "Estoque"  , estilo: "text-center" },
    ]

    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <SidebarMobile />
            <main className="w-full h-full overflow-y-auto relative bg-blue-50">
                <Header title="Massas" />
                <ListTable 
                    data={massas} 
                    title={titulos}
                />
            </main>
        </div>
    )
}

export default Massas;