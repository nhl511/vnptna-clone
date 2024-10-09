import { cookies } from "next/headers";

export async function POST(req: Request) {
  cookies().set({
    name: "user_info",
    value: "", // Set the cookie value to empty
    expires: new Date(0), // Set an expiration date in the past to delete the cookie
    path: "/", // Ensure the cookie is deleted site-wide
  });

  return new Response(JSON.stringify({ message: "Cookie deleted" }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
