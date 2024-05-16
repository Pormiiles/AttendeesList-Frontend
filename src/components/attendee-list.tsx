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

            <div className="border border-white/10 rounded-lg">
                <table className="w-full">
                    <thead>
                        <tr className="border-b border-white/10">
                            <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left">
                              <input type="checkbox" name="" id="" className="bg-black rounded size-4 border border-white/10"/>
                            </th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Código</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Participante</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data de inscrição</th>
                            <th className="py-3 px-4 text-sm font-semibold text-left">Data do checkin</th>
                            <th style={{ width: 64 }} className="py-3 px-4 text-sm font-semibold text-left"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 8 }).map((_, i) => {
                            return (
                                <tr key={i} className="border-b border-white/10 hover:bg-white/5">
                                    <td className="py-3 px-4 text-sm text-zinc-300">
                                        <input type="checkbox" name="" id="" />
                                    </td>
                                    <td className="py-3 px-4 text-sm text-zinc-300">12356</td>
                                    <td className="py-3 px-4 text-sm text-zinc-300">
                                        <div className="flex flex-col gap-1">
                                            <span className="font-semibold text-white">Fulano de Tal</span>
                                            <span>fulano123@gmail.com</span>
                                        </div>
                                    </td>
                                    <td className="py-3 px-4 text-sm text-zinc-300">7 dias atrás</td>
                                    <td className="py-3 px-4 text-sm text-zinc-300">3 dias trás</td>
                                    <td className="py-3 px-4 text-sm text-zinc-300">
                                        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5">
                                            <span className="material-symbols-outlined">more_horiz</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                    <tfoot>
                        <tr>
                            <td className="py-3 px-4 text-sm text-zinc-300" colSpan={3}>Mostrando 10 de 228 itens</td>
                            <td className="py-3 px-4 text-sm text-zinc-300 text-right" colSpan={3}>
                                <div className="inline-flex items-center gap-8">
                                    <span>Página 1 de 23</span>

                                    <div className="flex gap-1.5">
                                        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5">
                                            <span className="material-symbols-outlined">keyboard_double_arrow_left</span>
                                        </button>
                                        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5">
                                            <span className="material-symbols-outlined">chevron_left</span>
                                        </button>
                                        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5">
                                            <span className="material-symbols-outlined">chevron_right</span>
                                        </button>
                                        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5">
                                            <span className="material-symbols-outlined">keyboard_double_arrow_right</span>
                                        </button>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    </tfoot>
                </table>
            </div>
        </div>
    )
}