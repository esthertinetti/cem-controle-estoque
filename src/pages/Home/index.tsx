import Header from "../../components/Header/header";
import MenuDesktop from "../../components/Menu/menuDesktop";

function Home () {

    return (
        <div className="md:flex w-screen h-screen">
            <MenuDesktop />
            <main className="w-full h-full overflow-y-auto relative">
                <Header title="Dashboard" />
            </main>
        </div>
    )
}

export default Home;