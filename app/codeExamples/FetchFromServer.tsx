import { NextResponse } from "next/server";
async function sayHello() {
  return NextResponse.json({ data: "Hello world" });
}
export default async function Page() {
  //You can do this with internal APIs
  let res = await sayHello();
  //You can also call an external API like so:
  let fetchRes = await fetch("http://localhost:3000/api/hello");
  // ...
}
