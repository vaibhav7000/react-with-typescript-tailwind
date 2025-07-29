interface Todo {
    title: string,
    description: string,
    isCompleted: boolean
}

interface Expense {
    title: string;
    price: number;
    categories: string,
    payment: string
    
}

type AllExpense = {
    allExpense: Expense[]
}

enum Category {
    Category = "category",
    Food = "food",
    Travel = "travel",
    Entertainment = "entertainment",
}

enum Payment {
    Payment = "payment",
    Cash = "cash",
    Card = "card",
    UPI = "upi",
    NetBanking = "net-banking"
}




export {
    Todo, AllExpense, Expense, Payment, Category
}