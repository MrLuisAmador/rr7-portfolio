import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "Home | Luis Amador Portfolio" },
    { name: "description", content: "Welcome to Luis Amador Portfolio" },
  ];
};

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1>Home</h1>
    </section>
  );
}
