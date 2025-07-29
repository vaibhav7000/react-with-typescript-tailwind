import React, { JSX, ReactNode, useEffect, useMemo, useRef } from "react";
import { Category, Expense, Payment } from "../utils/ts-types/interface";
import { useSetAtom } from "jotai";
import expense from "../store/Expense";
import CustomInput from "../Components/CustomInput";
import CustomInputLabel from "../Components/CustomLabel";
import CustomDropDown from "../Components/DropDown";
import CustomButton from "../Components/Button";

export default function AddExpense(): JSX.Element {
    const setExpenses = useSetAtom(expense);

    const allPayment: Payment[] = useMemo<Payment[]>(function(): Payment[] {
        return Object.values(Payment);
    }, []);

    const allCategories: Category[] = useMemo<Category[]>(function(): Category[] {
        return Object.values(Category);
    }, []);

    const titleRef= useRef<HTMLInputElement>(null);
    const priceRef = useRef<HTMLInputElement>(null);
    const paymentRef = useRef<HTMLSelectElement>(null);
    const categoryRef = useRef<HTMLSelectElement>(null);

    useEffect(function() {
        titleRef.current?.focus();
    }, []);

    const addExpenseAction = (event: React.MouseEvent<HTMLButtonElement>) => {
        const title: string = titleRef.current?.value || "";
        const price: number = parseInt(priceRef.current?.value || "");

        const payment: string = paymentRef.current?.value || "";
        const category: string = categoryRef.current?.value || "";

        console.log(paymentRef);

        if(!title) {
            alert("Enter Valid title");
            return;    
        }

        if(!price) {
            alert("Enter valid Price");
            return;
        }

        if(!payment || payment === Payment.Payment) {
            alert("Select Payment method");
            return
        }

        if(!category || category === Category.Category) {
            alert("Select Valud Category");
            return
        }

        //  store that inside the storage
        setExpenses((value) => {
            return {
                allExpense: [...value.allExpense, {
                    title,
                    price,
                    payment,
                    categories: category
                }]
            }
        })

    }

    return (
        <div className="flex flex-col h-screen w-screen items-center justify-center">

            <div className="flex flex-col gap-y-6 px-10 py-4 bg-white rounded-xl">
                <InputContentWrapper>
                    <CustomInputLabel labelText="Enter Title" className="text-lg text-black/50 font-medium hover:text-black/100 duration-300 transition-all self-start" htmlFor="title" />
                    <CustomInput className="outline-gray-400 outline focus:outline-black p-2 rounded-md" ref={titleRef} placeholder="eg. GYM Fees" id="title" />
                </InputContentWrapper>

                <InputContentWrapper>
                    <CustomInputLabel labelText="Enter Price" className="text-lg text-black/50 font-medium hover:text-black/100 duration-300 transition-all self-start" htmlFor="price" />
                    <CustomInput className="outline-gray-400 outline focus:outline-black p-2 rounded-md" ref={priceRef} placeholder="eg. 900" id="price" />
                </InputContentWrapper>

                <InputContentWrapper>
                    <CustomInputLabel labelText="Select Payment" className="text-lg text-black/50 font-medium hover:text-black/100 duration-300 transition-all self-start" htmlFor="payment" />
                    <CustomDropDown ref={paymentRef} className="outline-gray-400 self-start" collection={allPayment} id="payment" defaultValue={Payment.Payment} />
                </InputContentWrapper>
                
                <InputContentWrapper>
                    <CustomInputLabel labelText="Select Category" className="text-lg text-black/50 font-medium hover:text-black/100 duration-300 transition-all self-start" htmlFor="category" />
                    <CustomDropDown ref={categoryRef} className="outline-gray-400 self-start" collection={allCategories} id="category" defaultValue={Category.Category} />
                </InputContentWrapper>

                <CustomButton buttonText="Add Expense" className="bg-blue-400 hover:bg-blue-500 transition-all duration-300 hover:cursor-pointer py-2 rounded-md text-white text-center" onClick={addExpenseAction} />

            </div>            
        </div>
    )
}


function InputContentWrapper({children}: {children: ReactNode}): React.JSX.Element {
    return (
        <div className="flex flex-col gap-y-1">
            {children}
        </div>
    )
}
