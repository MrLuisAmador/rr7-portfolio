import { MetaFunction } from "react-router";


export const meta: MetaFunction = () => {
    return [
      { title: "Contact | Luis Amador Portfolio" },
      { name: "description", content: "Contact Luis Amador" },
    ];
  };

  export default function Contact() {
    return (
      <div>
        <h1>Contact</h1>
      </div>
    );
  }
  