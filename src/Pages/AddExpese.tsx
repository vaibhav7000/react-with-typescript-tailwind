import { JSX, useMemo } from "react";
import { Category, Payment } from "../utils/ts-types/interface";

export default function AddExpense(): JSX.Element {
    const allPayment: Payment[] = useMemo<Payment[]>(function(): Payment[] {
        return Object.values(Payment);
    }, []);

    const allCategories: Category[] = useMemo<Category[]>(function(): Category[] {
        return Object.values(Category);
    }, []);

    console.log(allPayment);
    console.log(allCategories);


    return (
        <div>

        </div>
    )
}


