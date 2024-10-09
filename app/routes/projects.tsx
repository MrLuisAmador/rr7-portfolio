import { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
    return [
      { title: "Projects | Luis Amador Portfolio" },
      { name: "description", content: "Projects Luis Amador" },
    ];
  };

  export default function Projects() {
    return (
      <div>
        <h1>Projects</h1>
      </div>
    );
  }
  