import { type PropsWithChildren } from "react";

type CoursGoal = PropsWithChildren<{image:{src:string,alt:string}}>;

export default function Header({image,children}:CoursGoal) {
  return (
    <header>
        <img {...image}/>
        {children}
    </header>
  )
}

