interface Todo {
    title: string,
    description: string,
    isCompleted: boolean
}

interface Expense {
    title: string;
    price: number;
    categories: Category,
    payment: Payment
    
}

type AllExpense = {
    allExpense: Expense[]
}

enum Category {
    Food = "food",
    Travel = "travel",
    Entertainment = "entertainment",
}

enum Payment {
    Cash = "cash",
    Card = "card",
    UPI = "upi",
    NetBanking = "net-banking"
}




export {
    Todo, AllExpense, Expense, Payment, Category
}