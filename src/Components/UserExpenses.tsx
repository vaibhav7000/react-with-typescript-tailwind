import { JSX } from "react";
import expense from "../store/Expense";
import { useAtomValue } from "jotai";
import { AllExpense, Expense } from "../utils/ts-types/interface";
import SingleExpense from "./Expense";


export default function UserExpenses(): JSX.Element {
    const userExpenses: AllExpense = useAtomValue<AllExpense>(expense);
    

    return (
        // make grid for this
        <div >
            {userExpenses.allExpense.map((ex: Expense, idx: number) => <SingleExpense key={idx} expense={ex} />)}
        </div>
    )
}