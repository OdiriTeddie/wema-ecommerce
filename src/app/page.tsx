import { Button } from "../components/buttons";
import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h1>Wema Stores</h1>
      <Link href="/about">About</Link>
      <Button />
    </div>
  );
}
