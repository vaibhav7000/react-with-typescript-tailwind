import { JSX, useMemo, useRef } from "react";
import { Category, Expense, Payment } from "../utils/ts-types/interface";
import { useSetAtom } from "jotai";
import expense from "../store/Expense";

export default function AddExpense(): JSX.Element {
    const setExpenses = useSetAtom(expense);

    const allPayment: Payment[] = useMemo<Payment[]>(function(): Payment[] {
        return Object.values(Payment);
    }, []);

    const allCategories: Category[] = useMemo<Category[]>(function(): Category[] {
        return Object.values(Category);
    }, []);

    const titleRef= useRef<DomNodes | null>(null);
    const priceRef = useRef<DomNodes | null>(null);


    return (
        <div>
            
        </div>
    )
}


type DomNodes = HTMLInputElement;
