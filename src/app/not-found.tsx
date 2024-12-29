import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className=" w-full h-full overflow-hidden flex flex-col items-center justify-center ">
      <h2 className="text-2xl font-bold mt-6">Not Found:404</h2>
      <p className="text-lg">Could not find requested resource</p>
      <Button className="mt-4">
        <Link href="/">Back Home</Link>
      </Button>
    </div>
  );
}
