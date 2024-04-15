import { type PropsWithChildren } from "react";

type CoursGoal = PropsWithChildren<{
    title: string;
    id:number;
    onDelete: (id: number) => void;
}>;

export default function CoursGoal({ title,id,onDelete ,children }: CoursGoal) {
    return (
        <article>
            <div>
                <h2>{title}</h2>
                <p>{children}</p>
            </div>
            <button onClick={()=>onDelete(id)}>Delete</button>
        </article>
    );
}
