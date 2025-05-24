import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";
import SidebarMobile from "../../components/Menu/menuMobile";
import ListTable from "../../components/Tabela/listTable";

function Insumos() {
    const insumos = [
        {codigo: "INS001", descricao: "Farinha de Trigo",          unidade: "Saco de 25Kg",      estoque: 45, ideal: 45, minimo: 10, percentual: "100%", estilos: "text-[#00CC00]"},
        {codigo: "INS002", descricao: "Óleo Vegetal",              unidade: "Caixa com 24un",    estoque: 10, ideal: 20, minimo: 3,  percentual: "50%",  estilos: "text-[#F4880C]"},
        {codigo: "INS003", descricao: "Sal - Cada pacote com 1Kg", unidade: "Fardo de 10Kg",     estoque: 2,  ideal: 10, minimo: 1,  percentual: "30%",  estilos: "text-[#E90404]" },
        {codigo: "INS004", descricao: "Conservante",               unidade: "Saco de 1Kg",       estoque: 13, ideal: 25, minimo: 5,  percentual: "52%",  estilos: "text-[#F4880C]"},
        {codigo: "INS005", descricao: "Plástico",                  unidade: "Pacote com 1000un", estoque: 1,  ideal: 3,  minimo: 1,  percentual: "33%",  estilos: "text-[#E90404]"},
        {codigo: "INS006", descricao: "Rótulos",                   unidade: "Pacote com 1000un", estoque: 8,  ideal: 10, minimo: 2,  percentual: "80%",  estilos: "text-[#00CC00]"},
    ]

    const titulos = [
        {titulo: "Código",    estilo: "text-center"   },
        {titulo: "Descrição", estilo: "text-left"   },
        {titulo: "Unidade"  , estilo: "text-left"   },
        {titulo: "Estoque"  , estilo: "text-center" },
        {titulo: "Ideal"    , estilo: "text-center" },
        {titulo: "Mínimo"   , estilo: "text-center" },
        {titulo: "%"        , estilo: "text-center" },
    ]

    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <SidebarMobile />
            <main className="w-full h-full overflow-y-auto relative bg-blue-50">
                <Header title="Insumos" />
                <ListTable 
                    data={insumos} 
                    title={titulos}
                />
            </main>
        </div>
    )
}

export default Insumos;