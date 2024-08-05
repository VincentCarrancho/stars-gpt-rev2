import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  async function onButtonPress() {
    fetch("/tests/xata", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }

  return (
    <div className="flex-col">
      <h1>STARS GPT 2</h1>
      <p>Welcome to STARS GPT v2!</p>
      <p>
        This version builds on the original STARS GPT while improving the user
        experience and adding more features.{" "}
      </p>
      <Link href="/signin">
        <Button>Log in</Button>
      </Link>
    </div>
  );
}
