import { Edit, Plus, Trash2 } from "lucide-react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "../ui/table"
import { Button } from "../ui/button"

type TituloTabela = {
    titulo: string;
    estilo?: string;
};

type BodyTabela = {
    codigo: string;
    descricao: string;
    unidade?: string;
    peso?: string;
    estoque: number;
    ideal?: number;
    minimo?: number;
    percentual?: string;
    estilos?: string;
}

interface Props {
    title: TituloTabela[];
    data: BodyTabela[];
}

function ListTable ({data, title}: Props) {

    return(
        <div className="block bg-white rounded-lg m-12 p-8 shadow-md text-right">
            <Button className="rounded-lg bg-[#0A2186] hover:bg-[#041561] h-10 px-4 my-5">
                <Plus color="#fff" strokeWidth={2.5}/>
                Novo
            </Button>
            <Table className="mt-12">
                <TableHeader>
                    <TableRow >
                        {title.map((item, index) => (
                            <TableHead 
                                key={index}
                                className={`font-semibold text-lg leading-8 text-[#05004E] ${item.estilo}`}>
                                {item.titulo}
                            </TableHead>
                        ))}
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Editar</TableHead>
                        <TableHead className="font-semibold text-lg leading-8 text-[#05004E] text-center">Deletar</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {data.map((item, index) => (
                        <TableRow key={index} className="even:bg-gray-100">
                            <TableCell className="lg:table-cell text-center font-semibold text-base text-gray-900">{item.codigo}</TableCell>
                            <TableCell className="lg:table-cell text-left text-base text-gray-900">{item.descricao}</TableCell>
                            
                            { item.unidade && (
                                <TableCell className="lg:table-cell text-left text-base text-gray-900">{item.unidade}</TableCell>
                            )}

                            { item.peso && (
                                <TableCell className="lg:table-cell text-center text-base text-gray-900">{item.peso}</TableCell>
                            )}

                            <TableCell className="lg:table-cell text-center text-base text-gray-900">{item.estoque}</TableCell>
                            
                            { item.ideal && (
                                <TableCell className="lg:table-cell text-center text-base text-gray-900">{item.ideal}</TableCell>
                            )}

                            { item.minimo && (
                                <TableCell className="lg:table-cell text-center text-base text-gray-900">{item.minimo}</TableCell>
                            )}

                            { item.percentual && (
                                <TableCell className={`lg:table-cell text-center font-bold text-base ${item.estilos}`}>{item.percentual}</TableCell>
                            )}
                            
                            <TableCell className="lg:table-cell text-center text-base text-gray-900">
                                <Button className="bg-transparent hover:bg-transparent shadow-none [&_svg]:size-6">
                                    <Edit color="#0A2186" strokeWidth={2.5} />
                                </Button>
                            </TableCell>
                            <TableCell className="lg:table-cell text-center text-base text-gray-900">
                                <Button className="bg-transparent hover:bg-transparent shadow-none [&_svg]:size-6">
                                    <Trash2 color="#DB0F0F" strokeWidth={2.5} />
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )

}

export default ListTable