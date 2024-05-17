import { ComponentProps } from "react"

interface NavLinkProps extends ComponentProps<'a'> {
    children: string
    changeFontColor?: boolean
}

export function NavLink({changeFontColor, ...props}: NavLinkProps) {
    return (
        <a {...props} className={changeFontColor ? 'font-medium text-sm text-zinc-300' : 'font-medium text-sm'}>{props.children}</a>
    )
}