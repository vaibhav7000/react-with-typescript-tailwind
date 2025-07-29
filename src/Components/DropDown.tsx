import { forwardRef, InputHTMLAttributes } from "react";
import { Category, Payment } from "../utils/ts-types/interface";

type CustomDropDownProps = InputHTMLAttributes<HTMLSelectElement> & {
    collection: Payment[] | Category[];
};

const CustomDropDown = forwardRef<HTMLSelectElement, CustomDropDownProps>((props, ref) => {
    return (
        <>
            <select ref={ref} id={props.id} defaultValue={props.defaultValue} className={props.className} >
                {props.collection.map((single: Payment | Category, idx: number) => {
                    return (
                       <option value={single} disabled={idx === 0 ? true : false} >
                        {single}
                       </option>
                    )
                })}
            </select>
        </>
    )
})

export default CustomDropDown;