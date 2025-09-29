import { NextResponse } from "next/server";

let users = [
  { id: 1, name: "Ashutosh" },
  { id: 2, name: "Rahul" },
];

// GET - fetch users
export async function GET() {
  return NextResponse.json(users);
}

// POST - add a new user
export async function POST(request: Request) {
  const body = await request.json();
  const newUser = { id: Date.now(), ...body };
  users.push(newUser);
  return NextResponse.json(newUser, { status: 201 });
}

// PUT - update user
export async function PUT(request: Request) {
  const body = await request.json();
  users = users.map((u) => (u.id === body.id ? { ...u, ...body } : u));
  return NextResponse.json({ success: true });
}

// DELETE - delete user
export async function DELETE(request: Request) {
  const { id } = await request.json();
  users = users.filter((u) => u.id !== id);
  return NextResponse.json({ success: true });
}
