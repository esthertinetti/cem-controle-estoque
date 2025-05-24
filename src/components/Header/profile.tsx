import { LogOut, X } from "lucide-react";
import { Button } from "../ui/button";
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "../ui/sheet";
import { useNavigate } from "react-router-dom";

function Profile () {

    const navigate = useNavigate();
    const handleLogout = () => {
        navigate("/");
    }

    return (
        <div>
            <div className="hidden md:flex items-center p-2">
                <div className="ml-2 relative py-1 group cursor-pointer">
                    <span className="font-normal text-base leading-6 text-black">Nome do Usuário</span>
                </div>
                <div className="ml-4">
                    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39.0766 37.5156C36.9191 33.7668 32.8676 31.248 28.2402 31.248H21.9921C17.3647 31.248 13.3132 33.7668 11.1557 37.5156C14.5921 41.3425 19.571 43.7441 25.1162 43.7441C30.6613 43.7441 35.6402 41.3327 39.0766 37.5156ZM0.124023 25C0.124023 18.3717 2.75712 12.0148 7.44405 7.32787C12.131 2.64094 18.4878 0.00784302 25.1162 0.00784302C31.7445 0.00784302 38.1013 2.64094 42.7883 7.32787C47.4752 12.0148 50.1083 18.3717 50.1083 25C50.1083 31.6283 47.4752 37.9852 42.7883 42.6721C38.1013 47.359 31.7445 49.9921 25.1162 49.9921C18.4878 49.9921 12.131 47.359 7.44405 42.6721C2.75712 37.9852 0.124023 31.6283 0.124023 25ZM25.1162 26.562C26.9804 26.562 28.7682 25.8214 30.0864 24.5032C31.4046 23.185 32.1452 21.3972 32.1452 19.533C32.1452 17.6687 31.4046 15.8809 30.0864 14.5627C28.7682 13.2445 26.9804 12.5039 25.1162 12.5039C23.2519 12.5039 21.4641 13.2445 20.1459 14.5627C18.8277 15.8809 18.0871 17.6687 18.0871 19.533C18.0871 21.3972 18.8277 23.185 20.1459 24.5032C21.4641 25.8214 23.2519 26.562 25.1162 26.562Z" fill="#151D48"/>
                    </svg>
                </div>
            </div>

            <div className="flex md:hidden">
                <Sheet>
                    <SheetTrigger>
                        <div className="[&_svg]:size-7 px-1 py-0 bg-white shadow-none hover:bg-white w-">
                            <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M39.0766 37.5156C36.9191 33.7668 32.8676 31.248 28.2402 31.248H21.9921C17.3647 31.248 13.3132 33.7668 11.1557 37.5156C14.5921 41.3425 19.571 43.7441 25.1162 43.7441C30.6613 43.7441 35.6402 41.3327 39.0766 37.5156ZM0.124023 25C0.124023 18.3717 2.75712 12.0148 7.44405 7.32787C12.131 2.64094 18.4878 0.00784302 25.1162 0.00784302C31.7445 0.00784302 38.1013 2.64094 42.7883 7.32787C47.4752 12.0148 50.1083 18.3717 50.1083 25C50.1083 31.6283 47.4752 37.9852 42.7883 42.6721C38.1013 47.359 31.7445 49.9921 25.1162 49.9921C18.4878 49.9921 12.131 47.359 7.44405 42.6721C2.75712 37.9852 0.124023 31.6283 0.124023 25ZM25.1162 26.562C26.9804 26.562 28.7682 25.8214 30.0864 24.5032C31.4046 23.185 32.1452 21.3972 32.1452 19.533C32.1452 17.6687 31.4046 15.8809 30.0864 14.5627C28.7682 13.2445 26.9804 12.5039 25.1162 12.5039C23.2519 12.5039 21.4641 13.2445 20.1459 14.5627C18.8277 15.8809 18.0871 17.6687 18.0871 19.533C18.0871 21.3972 18.8277 23.185 20.1459 24.5032C21.4641 25.8214 23.2519 26.562 25.1162 26.562Z" fill="#151D48"/>
                            </svg>
                        </div>
                    </SheetTrigger>
                    <SheetContent side="right" className='pt-14 border-0 [&>button]:hidden'>
                        <SheetTitle className="sr-only">Usu&aacute;rio</SheetTitle>
                        <SheetDescription className="sr-only">Informa&ccedil;&otilde;es do usu&aacute;rio</SheetDescription>

                        <div>
                            <SheetClose asChild>
                                <Button className="[&_svg]:size-5 bg-inherit shadow-none hover:bg-inherit block absolute top-2 right-2 text-white hover:text-red-500 transition-colors p-2">
                                    <X className="h-5 w-5" color="#000" />
                                </Button>
                            </SheetClose>
                        </div>

                        <div className="block">
                            <span className="text-xl  text-center font-medium text-gray-txt leading-6 flex flex-col items-center mb-12">
                                <svg className="mb-6" width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M39.0766 37.5156C36.9191 33.7668 32.8676 31.248 28.2402 31.248H21.9921C17.3647 31.248 13.3132 33.7668 11.1557 37.5156C14.5921 41.3425 19.571 43.7441 25.1162 43.7441C30.6613 43.7441 35.6402 41.3327 39.0766 37.5156ZM0.124023 25C0.124023 18.3717 2.75712 12.0148 7.44405 7.32787C12.131 2.64094 18.4878 0.00784302 25.1162 0.00784302C31.7445 0.00784302 38.1013 2.64094 42.7883 7.32787C47.4752 12.0148 50.1083 18.3717 50.1083 25C50.1083 31.6283 47.4752 37.9852 42.7883 42.6721C38.1013 47.359 31.7445 49.9921 25.1162 49.9921C18.4878 49.9921 12.131 47.359 7.44405 42.6721C2.75712 37.9852 0.124023 31.6283 0.124023 25ZM25.1162 26.562C26.9804 26.562 28.7682 25.8214 30.0864 24.5032C31.4046 23.185 32.1452 21.3972 32.1452 19.533C32.1452 17.6687 31.4046 15.8809 30.0864 14.5627C28.7682 13.2445 26.9804 12.5039 25.1162 12.5039C23.2519 12.5039 21.4641 13.2445 20.1459 14.5627C18.8277 15.8809 18.0871 17.6687 18.0871 19.533C18.0871 21.3972 18.8277 23.185 20.1459 24.5032C21.4641 25.8214 23.2519 26.562 25.1162 26.562Z" fill="#151D48"/>
                                </svg>
                                Nome do Usuário
                            </span>
                            <div className="mx-auto max-w-[120px] p-2 bg-white border-2 border-red-600 rounded-lg transition-all cursor-pointer" >
                                <span className='text-center w-auto flex justify-center items-center text-red-500' onClick={() => handleLogout()}>
                                    <LogOut className="mr-3" />
                                    Sair
                                </span>
                            </div>
                        </div>
                    
                    </SheetContent>
                </Sheet>
            </div>
        </div>
    )
}

export default Profile;