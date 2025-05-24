import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import Icone from '@/assets/Logo.svg';

function Login() {
    const navigate = useNavigate();
    const handleLogin = () => {
        navigate("/home");
    }

    return (
        <div className="bg-custom-bg bg-no-repeat bg-cover h-screen w-full flex justify-center items-center">
            <div className="flex-col lg:flex-row flex lg:justify-between relative justify-center xl:max-w-[80%] w-full p-2 items-center">
                <div className="flex flex-col justify-center items-center lg:mr-20 lg:max-w-[80%] max-w-[300px]">
                    <img src={Icone} alt="CEM Icone" className="w-full mb-5" />
                </div>
                <div className="p-6 md:p-12 bg-gray-100 rounded-[20px] shadow-md m-4 flex flex-col justify-between max-w-lg w-full h-full transition-all text-left">
                    <h2 className="font-semibold text-4xl text-[#151D48] mb-2.5 mt-10">Login</h2>
                    <p className="text-base leading-normal text-[#151D48] mb-8">Digite seus dados de acesso nos campos abaixo</p>
                    <div className="w-full">
                        <Label className="w-full block font-normal text-base leading-[22px] text-[#151D48]" htmlFor="login">E-mail</Label>
                        <Input className="w-full block px-2 mt-1 h-12 bg-gray-200 rounded-lg mb-10 shadow-sm transition-all" type="text" name="login" id="login" />

                        <Label className="w-full block font-normal text-base leading-[22px] text-[#151D48]" htmlFor="password">Senha</Label>
                        <Input className="w-full block px-2 mt-1 h-12 bg-gray-200 rounded-lg mb-10 shadow-sm transition-all" type="password" name="password" id="password" />
                        
                        <Button className="mb-10 flex flex-row items-center p-2 w-full h-14 bg-[#0A2186] hover:bg-[#151D48] shadow-[0px_3px_3px_rgba(55,69,87,0.1)] rounded-xl font-poppins font-semibold text-lg leading-[27px] text-white text-center" onClick={() => handleLogin()}>
                            Entrar
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login;