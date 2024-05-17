import { ComponentProps } from "react";

interface TableCellProps extends ComponentProps<'td'> {
    textAlign?: boolean
}

export function TableCell({textAlign, ...props}: TableCellProps) {
    return (
        <td className={textAlign ? "py-3 px-4 text-sm text-zinc-300 text-right" : "py-3 px-4 text-sm text-zinc-300"} {...props}>
            {props.children}
        </td>
    )
}