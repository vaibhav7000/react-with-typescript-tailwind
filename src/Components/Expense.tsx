import { JSX } from "react";
import { Expense } from "../utils/ts-types/interface";

export default function SingleExpense({expense}: {expense: Expense}): JSX.Element {

    return (
        <div>
            <div className="">
                {expense.title}
            </div>

            <div>
                {expense.price}
            </div>

            <div>
                {expense.payment}
            </div>

            <div>
                {expense.categories}
            </div>
        </div>
    )
}