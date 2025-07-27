import { forwardRef, InputHTMLAttributes, JSX } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement>

const CustomInput = forwardRef<HTMLInputElement, InputProps>(function(props, ref) {
    return (
        <input/>
    )
})