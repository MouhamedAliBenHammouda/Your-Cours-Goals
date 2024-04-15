import CoursGoal from "./CoursGoal";
import { type CourseGoal } from "../App";

type CoursGoalListProps = {
    goals: CourseGoal[];
    onDeleteGoal:(id:number)=> void;
};

export default function CourseGoalList({ goals,onDeleteGoal }: CoursGoalListProps) {
    return (
        <ul>
            {goals.map((goal) => <li key={goal.id}>
                <CoursGoal
                    id={goal.id}
                    onDelete={onDeleteGoal}
                    title={goal.title}
                    >
                    {goal.desctiption}
                </CoursGoal>
            </li>)}
        </ul>
    )
}
