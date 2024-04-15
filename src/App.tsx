
import Header from "./components/Header";
import CourseGoalList from "./components/CourseGoalList";
import NewGoal from "./components/NewGoal";
import goalsImg from "./assets/goals.jpg";
import { useState } from "react";



export type CourseGoal = {
  title: string;
  desctiption: string;
  id: number;
}
export default function App() {


  const [goals, setGals] = useState<CourseGoal[]>([]);

  function handleAssGoal(goal:string,summary:string) {
    setGals(prevGoals => {
      const newGoal: CourseGoal = {
        id: Math.random(),
        title: goal,
        desctiption: summary
      };
      return [...prevGoals, newGoal]
    });
  }
  function handleDeleteGoal(id:number){

    setGals(prevGoals =>prevGoals.filter((goal)=>goal.id!==id));
  }

  return (
    <main>
      <Header image={{ src: goalsImg, alt: 'A list of goals' }}>
        <h1>Your Cours Goals</h1>
      </Header>
      <NewGoal onAddGoal={handleAssGoal}/>
      <CourseGoalList goals={goals} onDeleteGoal={handleDeleteGoal}/>
    </main>
  );
}
