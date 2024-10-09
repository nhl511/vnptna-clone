export async function POST(request: Request) {
  const res = await request.json();
  const token = res.payload.data.token;
  if (!token) {
    return Response.json({ message: "Không nhận được token" }, { status: 400 });
  }
  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        "Set-Cookie": `user_info=${token}; Path=/; HttpOnly`,
      },
    }
  );
}
