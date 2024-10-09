import { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
    return [
      { title: "Blogs | Luis Amador Portfolio" },
      { name: "description", content: "Blogs Luis Amador" },
    ];
  };

  export default function Blogs() {
    return (
      <div>
        <h1>Blogs</h1>
      </div>
    );
  }
  