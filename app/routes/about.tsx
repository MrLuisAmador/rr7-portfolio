import { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
    return [
      { title: "About | Luis Amador Portfolio" },
      { name: "description", content: "About Luis Amador" },
    ];
  };

  export default function About() {
    return (
      <div>
        <h1>About</h1>
      </div>
    );
  }
  