import { Button } from "@/components/ui/button";

export default function Home() {
  const date = new Date();

  return (
    <div className="container p-5">
      <h2>Hello world</h2>
      <p>{date.toString()}</p>
      <Button>Button</Button>
    </div>
  );
}
