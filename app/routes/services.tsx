import { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
    return [
      { title: "Services | Luis Amador Portfolio" },
      { name: "description", content: "Services Luis Amador" },
    ];
  };

  export default function Services() {
    return (
      <div>
        <h1>Services</h1>
      </div>
    );
  }
  