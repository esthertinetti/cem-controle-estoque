import { Edit, Plus, Trash } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"

function ListTable () {

    return(
        <div className="block bg-white rounded-lg m-12 p-8 shadow-md text-right">
            <Button className="rounded-lg bg-[#0A2186] h-10 px-4 my-5">
                <Plus color="#fff" strokeWidth={3}/>
                Novo
            </Button>
            <Table className="mt-12">
                <TableHeader>
                    <TableRow >
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Código</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E]">Descrição</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E]">Unidade</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Estoque</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Ideal</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Mínimo</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">%</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Editar</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Deletar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS001</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Farinha de Trigo</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Saco de 25Kg</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">45</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">45</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">10</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#00CC00]">100%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS002</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Óleo Vegetal</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Caixa com 24un</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">10</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">20</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">3</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#F4880C]">50%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS003</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Sal  - Cada pacote com 1K</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Fardo de 10Kg</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">2</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">10</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">1</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#E90404]">30%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS004</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Conservante</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Saco de 1Kg</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">13</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">25</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">5</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#F4880C]">52%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS005</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Plástico</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Pacote com 1000un</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">1</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">3</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">1</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#E90404]">33%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                    <TableRow className="even:bg-gray-100">
                        <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">INS006</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Rótulos</TableCell>
                        <TableCell className="lg:table-cell text-base text-gray-900">Pacote com 1000un</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">8</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">10</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">2</TableCell>
                        <TableCell className="lg:table-cell text-center font-bold text-base text-[#00CC00]">80%</TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Edit />
                            </Button>
                        </TableCell>
                        <TableCell className="lg:table-cell text-center text-base text-gray-900">
                            <Button>
                                <Trash />
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    )

}

export default ListTable