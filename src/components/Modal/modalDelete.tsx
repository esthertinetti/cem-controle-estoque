import { ReactNode } from "react";
import { AlertDialog, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "../ui/alert-dialog";
import { TriangleAlert } from "lucide-react";
import { AlertDialogAction, AlertDialogCancel } from "@radix-ui/react-alert-dialog";

interface DialogProps {
    trigger: ReactNode
    nameFile?: string;
}

function ModalDelete({trigger, nameFile} : DialogProps) {

    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
            <AlertDialogContent className="p-0 border-[#5D7A81] gap-0">
                <AlertDialogHeader className="rounded-t-lg bg-button-menu-active">
                    <AlertDialogTitle className="font-semibold text-2xl leading-[30px] text-center text-[#1D1D1D] flex flex-col items-center px-4 pt-6 pb-1">
                        <TriangleAlert color="#DB0F0F" size={48} className="mb-2"/> 
                        Deseja excluir {nameFile}?
                    </AlertDialogTitle>
                </AlertDialogHeader>
                <AlertDialogDescription className="text-center pb-2 px-3 text-lg font-medium text-gray-800">
                    Essa opção não poderá ser desfeita!
                </AlertDialogDescription>
                <AlertDialogFooter className="flex-row justify-evenly md:justify-center pb-4 mt-12">
                    <AlertDialogCancel className="transition-all w-[40%] md:w-32 h-12 bg-white border-2 border-[#0A2186] rounded-2xl hover:bg-[#05004E] hover:border-[#05004E] hover:text-white font-semibold text-base leading-6 text-[#0A2186]">
                        Cancelar
                    </AlertDialogCancel>
                    <AlertDialogAction className="w-[40%] md:w-32 h-12 bg-[#DB0F0F] hover:bg-[#b81414] rounded-2xl font-semibold text-base leading-6 text-white">
                        Excluir
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )

}

export default ModalDelete;