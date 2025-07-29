import React, { forwardRef, InputHTMLAttributes, JSX, useEffect } from "react";


type InputProps = InputHTMLAttributes<HTMLInputElement>

const CustomInput = forwardRef<HTMLInputElement, InputProps>(function(props, ref) {
    return (
        <div>
            <input ref={ref} type={props.type} id={props.id} placeholder={props.placeholder} className={props.className}  />
        </div>
    )
})

export default CustomInput