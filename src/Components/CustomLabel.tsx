import React, { LabelHTMLAttributes } from "react";


type CustomInputLabelProps = LabelHTMLAttributes<HTMLLabelElement> & {
    labelText: string;
}

const CustomInputLabel: React.FC<CustomInputLabelProps> =  (props) => {

    return (
        <><label htmlFor={props.htmlFor} className={props.className}>{props.labelText}</label></>
    )
}

export default CustomInputLabel;