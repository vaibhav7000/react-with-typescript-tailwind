import { atomWithStorage } from "jotai/utils";
import { AllExpense, Category, Payment } from "../utils/ts-types/interface";

const expense = atomWithStorage<AllExpense>("expense", {
    allExpense: [{
        title: "Wifi-recharge",
        price: 233,
        payment: Payment.Card,
        categories: Category.Entertainment
    }],
}, {
    getItem(key: string, initialValue: AllExpense) {
        const storedValue = localStorage.getItem(key);
        return storedValue ? JSON.parse(storedValue) : initialValue
    },
    setItem(key: string, newValue: AllExpense) {
        localStorage.setItem(key, JSON.stringify(newValue));
    },
    removeItem(key: string) {
        localStorage.removeItem(key);
    },
}, {
    getOnInit: true
})

export default expense;