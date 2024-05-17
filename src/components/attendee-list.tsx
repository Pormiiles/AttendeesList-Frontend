import { IconButton } from "../icon-button"
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"

export function AttendeeList() {
    return (
        <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
                <h1 className="text-xl font-bold">Participantes</h1>
                <div className="px-3 py-1.5 border border-white/10 rounded-lg w-72 flex items-center gap-3">
                    <span className="material-symbols-outlined text-emerald-300">search</span>
                    <input className="bg-transparent flex-1 outline-none border-0 p-0 text-sm" placeholder="Buscar participantes..." />
                </div>
            </div>

            <Table>
                <thead>
                    <TableRow>
                        <TableHeader style={{ width: 64 }}>
                            <input type="checkbox" name="" id="" className="bg-black rounded size-4 border border-white/10"/>
                        </TableHeader>
                        <TableHeader>Código</TableHeader>
                        <TableHeader>Participante</TableHeader>
                        <TableHeader>Data de inscrição</TableHeader>
                        <TableHeader>Data do checkin</TableHeader>
                        <TableHeader style={{ width: 64 }}></TableHeader>
                    </TableRow>
                </thead>
                <tbody>
                    {Array.from({ length: 8 }).map((_, i) => {
                        return (
                            <TableRow key={i} hover={true}>
                                <TableCell>
                                    <input type="checkbox" name="" id="" />
                                </TableCell>
                                <TableCell>12356</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">Fulano de Tal</span>
                                        <span>fulano123@gmail.com</span>
                                    </div>
                                </TableCell>
                                <TableCell>7 dias atrás</TableCell>
                                <TableCell>3 dias trás</TableCell>
                                <TableCell>
                                    <IconButton>
                                        <span className="material-symbols-outlined">more_horiz</span>
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </tbody>
                <tfoot>
                    <tr>
                        <TableCell colSpan={3}>Mostrando 10 de 228 itens</TableCell>
                        <TableCell textAlign={true} colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página 1 de 23</span>

                                <div className="flex gap-1.5">
                                    <IconButton>
                                        <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                                    </IconButton>
                                    <IconButton>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </IconButton>
                                    <IconButton>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </IconButton>
                                    <IconButton>
                                        <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                                    </IconButton>
                                </div>
                            </div>
                        </TableCell>
                    </tr>
                </tfoot>
            </Table>
        </div>
    )
}