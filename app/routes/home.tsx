import type { MetaFunction } from "react-router";

export const meta: MetaFunction = () => {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
};

export default function Home() {
  return (
    <section className="flex h-screen items-center justify-center">
      <h1>Home</h1>
    </section>
  );
}
