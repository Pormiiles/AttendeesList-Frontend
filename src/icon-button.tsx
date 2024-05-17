import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<'button'> {}

export function IconButton(props: IconButtonProps) {
    return (
        <button className="bg-blblack/20 border border-white/10 rounded-md p-1.5" {...props}></button>
    )
}