import React, { ButtonHTMLAttributes } from "react";


type CustomButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonText: string;
};

const CustomButton: React.FC<CustomButtonProps> = (props) => {

    return (
        <button className={props.className} disabled={props.disabled} onClick={props.onClick}>
            {props.buttonText}
        </button>
    )
}

export default CustomButton;

