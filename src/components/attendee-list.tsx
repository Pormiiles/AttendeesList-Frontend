import { IconButton } from "../icon-button"
import dayjs from 'dayjs'
import 'dayjs/locale/pt-br'
import relativeTime from 'dayjs/plugin/relativeTime'
import { Table } from "./table/table"
import { TableCell } from "./table/table-cell"
import { TableHeader } from "./table/table-header"
import { TableRow } from "./table/table-row"
import { attendees } from "../data/attendees"
import { useState } from "react"

dayjs.extend(relativeTime)
dayjs.locale('pt-br')

export function AttendeeList() {
    const [page, setPage] = useState(1)
    const totalPages = Math.ceil(attendees.length / 10)

    function goToNextPage() {
        setPage(page + 1)
    }

    function goToPreviousPage() {
        setPage(page - 1)
    }
    
    function goToFirstPage() {
        setPage(1)
    }

    function goToLastPage() {
        setPage(totalPages)
    }

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
                    {attendees.slice((page - 1) * 10, page * 10).map((attendee) => {
                        return (
                            <TableRow key={attendee.id} hover={true}>
                                <TableCell>
                                    <input type="checkbox" name="" id="" />
                                </TableCell>
                                <TableCell>{attendee.id}</TableCell>
                                <TableCell>
                                    <div className="flex flex-col gap-1">
                                        <span className="font-semibold text-white">{attendee.name}</span>
                                        <span>{attendee.email}</span>
                                    </div>
                                </TableCell>
                                <TableCell>{dayjs().to(attendee.createdAt)}</TableCell>
                                <TableCell>{dayjs().to(attendee.checkedInAt)}</TableCell>
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
                        <TableCell colSpan={3}>Mostrando {page * 10} de {attendees.length}</TableCell>
                        <TableCell textAlign={true} colSpan={3}>
                            <div className="inline-flex items-center gap-8">
                                <span>Página {page} de {totalPages}</span>

                                <div className="flex gap-1.5">
                                    <IconButton onClick={goToFirstPage} disabled={page === 1}>
                                        <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                                    </IconButton>
                                    <IconButton onClick={goToPreviousPage} disabled={page === 1}>
                                        <span className="material-symbols-outlined">chevron_left</span>
                                    </IconButton>
                                    <IconButton onClick={goToNextPage} disabled={page === totalPages}>
                                        <span className="material-symbols-outlined">chevron_right</span>
                                    </IconButton>
                                    <IconButton onClick={goToLastPage} disabled={page === totalPages}>
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