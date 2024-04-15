import CoursGoal from "./CoursGoal";
import { type CourseGoal } from "../App";
import InfoBox from "./infoBox";
import { type ReactNode } from "react";

type CoursGoalListProps = {
    goals: CourseGoal[];
    onDeleteGoal: (id: number) => void;
};

export default function CourseGoalList({ goals, onDeleteGoal }: CoursGoalListProps) {
    if (goals.length === 0) {
        return <InfoBox mode="hint">You have no course goals yet.Startbadding some!</InfoBox>
    }
    let waringBox: ReactNode;

    if (goals.length >= 4) {
        waringBox = (
            <InfoBox mode="warning" severity="medium">
                You're collecting a lot of goals.Don't put too much on your plate!
            </InfoBox>
        )
    }
    return (
        <>
            {waringBox}
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
        </>
    )
}
