import { Button } from "../ui/button";
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog";
import { ReactNode } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import InputQtd from "./stockInput";

interface ModalProps {
    trigger: ReactNode;
    title: string;
    titleInput?: string;
    showMoreQtd: boolean;
    initialValue: number;
    initialValue2?: number;
    initialValue3?: number;
    description?: string;
    details?: string;
}

function ModalProduct(
    { 
        trigger, 
        title, 
        titleInput, 
        showMoreQtd, 
        initialValue, 
        initialValue2, 
        initialValue3, 
        description, 
        details
    }: ModalProps) {

    return (
        <Dialog>
            <DialogTrigger asChild>
                {trigger}
            </DialogTrigger>

            <DialogContent className="md:max-w-screen-xl w-full shadow-md rounded-lg">
                <DialogHeader className="mb-8 pb-4">
                    <DialogTitle className="font-semibold text-xl leading-7 text-[#05004E]">
                        {title}
                    </DialogTitle>
                    <DialogDescription className="hidden"></DialogDescription>
                </DialogHeader>
                <div className="flex flex-wrap justify-between">
                    <div className="md:max-w-[70%] w-full md:pr-6">
                        <Label htmlFor="description" className="font-semibold text-base leading-6 text-[#05004E]">
                            Descrição
                        </Label>
                        <Input id="description" type="text" defaultValue={description} className="mt-1 w-full h-10 bg-[#F2F2F2] rounded-lg border-none"/>
                    </div>
                    <div className="md:max-w-[30%] w-full md:mt-0 mt-8">
                        <Label htmlFor="second" className="font-semibold text-base leading-6 text-[#05004E]">
                            {titleInput}
                        </Label>
                        <Input id="second" type="text" defaultValue={details} className="mt-1 w-full h-10 bg-[#F2F2F2] rounded-lg border-none"/>
                    </div>
                    <div className="w-full mt-8">
                        <div className="flex md:flex-row flex-col md:items-center">
                            <Label className="flex-col flex mr-6">
                                <span className="font-semibold text-lg leading-[25px] text-[#05004E]">Estoque</span>
                                <span className="hidden md:flex h-10 items-center font-semibold text-sm leading-[25px] text-[#05004E]">Quantidade</span>
                            </Label>
                            { showMoreQtd 
                                ? (
                                    <div className="flex md:mt-0 mt-5 justify-start md:flex-nowrap flex-wrap md:gap-0 gap-4">
                                        <InputQtd label="Atual" initial={initialValue} />
                                        <InputQtd label="Ideal" initial={initialValue2 ? initialValue2 : 0}/>
                                        <InputQtd label="Mínimo" initial={initialValue3 ? initialValue3 : 0}/>
                                    </div>
                                ) : (
                                    <div className="flex justify-start ">
                                        <InputQtd label="" initial={initialValue}/>
                                    </div>
                                )
                            }
                        </div>

                    </div>

                </div>

                <DialogFooter className="flex-row justify-evenly mt-8 md:mt-6">
                    <DialogClose asChild>
                        <Button type="button" className="w-[40%] md:w-32 h-12 bg-white border-2 border-[#0A2186] rounded-2xl hover:bg-[#DB0F0F] hover:border-[#DB0F0F] hover:text-white font-semibold text-base leading-6 text-[#0A2186]">
                            Cancelar
                        </Button>
                    </DialogClose>
                    <Button type="button" className="w-[40%] md:w-32 h-12 bg-[#0A2186] hover:bg-[#05004E] rounded-2xl font-semibold text-base leading-6 text-white">
                        Salvar
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}

export default ModalProduct;