import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
    return (
        <button className={props.disabled ? "opacity-50 bg-blblack/20 border border-white/10 rounded-md p-1.5" : "bg-blblack/20 border border-white/10 rounded-md p-1.5"} {...props}></button>
    )
}