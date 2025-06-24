import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  const formData = await request.formData();
  const name = formData.get('name') as string;
  const html = `
    <!DOCTYPE html>
    <html lang="ja">
      <head><meta charset="utf-8"><title>送信結果</title></head>
      <body>
        <h1>お名前：${name}</h1>
        <p>HTMLをAPIが返却する手法。</p>
        <p>URLは、/api/uncontrolled-defaultになっている。</p>
        <p>古いSSRのやり方</p>
        <a href="/uncontrolled-default">戻る</a>
      </body>
    </html>
  `;

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  });
}
export async function GET(request: NextRequest) {
  console.log(request);
  console.log('ここ通ってる');
  return NextResponse.json({ ok: true, title: 'get成功!', name: '' });
}
