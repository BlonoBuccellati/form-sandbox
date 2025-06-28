import { NextRequest, NextResponse } from 'next/server';
export async function POST(req: NextRequest) {
  const formData = await req.formData();
  const name = formData.get('name');
  console.log(name);
  const email = formData.get('email');
  console.log(email);
  return NextResponse.json({ ok: true, name, email });
}
