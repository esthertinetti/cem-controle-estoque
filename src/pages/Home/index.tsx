import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";
import { Chart } from "react-google-charts";


function Home () {

    const data = [
        ["Tempo", "Quantidade", { role: "style" }],
        ["dez/24", 1100, "color: #0D97BD"], 
        ["jan/25", 800, "color: #0D97BD"], 
        ["fev/25", 1280, "color: #0D97BD"],
        ["mar/25", 1200, "color: #0D97BD"], 
        ["abr/25", 780, "color: #0D97BD"], 
        ["mai/25", 900, "color: #0D97BD"], 
    ];

    const data1 = [
        ["Tempo", "Quantidade", { role: "style" }],
        ["dez/24", 1200, "color: #DB4437"], 
        ["jan/25", 1000, "color: #DB4437"], 
        ["fev/25", 900, "color: #DB4437"],
        ["mar/25", 1350, "color: #DB4437"], 
        ["abr/25", 600, "color: #DB4437"], 
        ["mai/25", 400, "color: #DB4437"], 
    ];

    const data2 = [
        ["Tempo", "Quantidade", { role: "style" }],
        ["dez/24", 600, "color: #00D458"], 
        ["jan/25", 650, "color: #00D458"], 
        ["fev/25", 400, "color: #00D458"],
        ["mar/25", 800, "color: #00D458"], 
        ["abr/25", 910, "color: #00D458"], 
        ["mai/25", 200, "color: #00D458"], 
    ];

    const data3 = [
        ["Tempo", "Quantidade", { role: "style" }],
        ["dez/24", 1000, "color: #F4880C"], 
        ["jan/25", 1400, "color: #F4880C"], 
        ["fev/25", 600, "color: #F4880C"],
        ["mar/25", 800, "color: #F4880C"], 
        ["abr/25", 520, "color: #F4880C"], 
        ["mai/25", 430, "color: #F4880C"], 
    ];

    const data4 = [
        ["Tempo", "Quantidade", { role: "style" }],
        ["dez/24", 1500, "color: #a1047f"], 
        ["jan/25", 1390, "color: #a1047f"], 
        ["fev/25", 760, "color: #a1047f"],
        ["mar/25", 800, "color: #a1047f"], 
        ["abr/25", 1010, "color: #a1047f"], 
        ["mai/25", 100, "color: #a1047f"], 
    ];



    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <main className="w-full h-full overflow-y-auto relative bg-blue-50">
                <Header title="Dashboard" />

                <div className="w-full p-5 md:p-12 flex flex-wrap justify-between">
                    <div className="bg-white w-full shadow-md rounded-lg lg:max-w-[calc(50%-12px)] p-6">
                        <p className="font-semibold text-xl text-[#05004E] leading-7 mb-5">Insumos</p>
                        <ul className="flex flex-wrap justify-between gap-6">
                            <li className="bg-red-600 text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Sal - Cada pacote com 1Kg</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>2</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>10</strong></p>
                            </li>
                            <li className="bg-red-600 text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Plástico</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>1</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>3</strong></p>
                            </li>
                            <li className="bg-[#F5B80E] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Óleo Vegetal</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>10</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>3</strong></p>
                            </li>
                            <li className="bg-[#F5B80E] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Conservante</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>13</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>25</strong></p>
                            </li>
                            <li className="bg-[#00CC00] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Farinha de Trigo</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>45</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>45</strong></p>
                            </li>
                            <li className="bg-[#00CC00] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Rótulos</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>8</strong></p>
                                <p className="text-base min-h-12">Estoque ideal: <strong>10</strong></p>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-white w-full shadow-md rounded-lg lg:max-w-[calc(50%-12px)] p-6 lg:mt-0 mt-6">
                        <p className="font-semibold text-xl text-[#05004E] leading-7 mb-5">Massas</p>
                        <ul className="flex flex-wrap justify-between gap-6">
                            <li className="bg-[#005BE5] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Massa</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>45</strong></p>
                                <p className="text-base min-h-12 flex items-center justify-center">500g</p>
                            </li>
                            <li className="bg-[#005BE5] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Massa - Pastelaria</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>38</strong></p>
                                <p className="text-base min-h-12 flex items-center justify-center">1Kg</p>
                            </li>
                            <li className="bg-[#005BE5] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Óleo Vegetal</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>17</strong></p>
                                <p className="text-base min-h-12 flex items-center justify-center">1Kg</p>
                            </li>
                            <li className="bg-[#005BE5] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Conservante</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>23</strong></p>
                                <p className="text-base min-h-12 flex items-center justify-center">500g</p>
                            </li>
                            <li className="bg-[#005BE5] text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full">
                                <p className="font-medium text-base min-h-12 flex items-center justify-center">Farinha de Trigo</p>
                                <p className="my-2.5 text-2xl md:text-3xl lg:text-5xl"><strong>36</strong></p>
                                <p className="text-base min-h-12 flex items-center justify-center">400g</p>
                            </li>
                            <li className="text-white text-center p-4 rounded-lg max-w-full md:max-w-[45%] 2xl:max-w-[30%] w-full"></li>
                        </ul>
                    </div>
                    <div className="bg-white w-full h-auto shadow-md rounded-lg mt-6 p-6">
                        <p className="font-semibold text-xl text-[#05004E] leading-7 mb-6">Totalização - 6 meses</p>
                        <div className="flex justify-between flex-wrap xl:flex-nowrap">
                            <div className="block h-full w-full xl:max-w-auto lg:max-w-[30%] md:max-w-[50%] max-w-full xl:mb-0 mb-5">
                                <p className="text-center mb-2 text-base font-semibold leading-5 text-[#0A2186]" >Massa 500g</p>
                                <Chart 
                                    chartType="ColumnChart" height="100%" data={data} options={{legend: "" ,}}
                                />
                            </div>

                            <div className="block h-full w-full xl:max-w-auto lg:max-w-[30%] md:max-w-[50%] max-w-full xl:mb-0 mb-5">
                                <p className="text-center mb-2 text-base font-semibold leading-5 text-[#0A2186]" >Massa - Pastelaria 1Kg</p>
                                <Chart chartType="ColumnChart" height="100%" data={data1}  />
                            </div>

                            <div className="block h-full w-full xl:max-w-auto lg:max-w-[30%] md:max-w-[50%] max-w-full xl:mb-0 mb-5">
                                <p className="text-center mb-2 text-base font-semibold leading-5 text-[#0A2186]" >Massa - Mercado 1Kg</p>
                                <Chart chartType="ColumnChart" height="100%" data={data2}  />
                            </div>

                            <div className="block h-full w-full xl:max-w-auto lg:max-w-[30%] md:max-w-[50%] max-w-full xl:mb-0 mb-5">
                                <p className="text-center mb-2 text-base font-semibold leading-5 text-[#0A2186]" >Lazanha 500g</p>
                                <Chart chartType="ColumnChart" height="100%" data={data3}  />
                            </div>

                            <div className="block h-full w-full xl:max-w-auto lg:max-w-[30%] md:max-w-[50%] max-w-full xl:mb-0 mb-5">
                                <p className="text-center mb-2 text-base font-semibold leading-5 text-[#0A2186]" >Disco 400g</p>
                                <Chart chartType="ColumnChart" height="100%" data={data4}  />
                            </div>

                            <div className="block xl:hidden lg:max-w-[30%] md:max-w-[50%] max-w-full w-full"></div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Home;