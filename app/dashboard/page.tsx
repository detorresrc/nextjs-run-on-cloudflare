import Link from "next/link";

export const runtime = "edge";

export default function Page() {
  return (
    <div>
      <h1>Hello, Dashboard Page!</h1>

      <Link href="/">Home Page</Link>
    </div>
  );
}