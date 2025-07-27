import { JSX } from "react";
import type { Todo } from "../utils/ts-types/interface";;

export default function Todos({todos}: {todos: Todo[]}): JSX.Element {

    return (
        <div>
            {todos.map((todo: Todo, idx: number) => <SingleTodo key={idx} todo={todo}/>)}
        </div>
    )
}

function SingleTodo({todo}: {todo: Todo}): JSX.Element {

    return (
        <div>
            <div>
                {todo["title"]}
            </div>

            <div>
                {todo["description"]}
            </div>

            <button className="bg-red-400">
                {`${todo.isCompleted}`}
            </button>
        </div>
    )
}