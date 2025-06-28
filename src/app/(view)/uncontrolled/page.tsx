'use client';

import ReturnButton from '@/components/return-button';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
const Description = () => {
  return (
    <div className='py-10 space-y-4'>
      <h1 className='text-2xl font-bold'>処理の流れ</h1>
      <ol className='list-decimal'>
        <li>formのonSubmit実行</li>
        <li>
          e.preventDefault()でデフォルトの挙動（method,action）を止め、ページ遷移、HTTP通信を防ぐ。
        </li>
        <li>form要素がイベントの引数に入ってくるので、そこからデータを取得</li>
        <li>APIエンドポイントにリクエスト</li>
      </ol>
    </div>
  );
};
const Page = () => {
  console.log('レンダリング');
  const handlerOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの挙動を抑止し、action、method,ページ遷移しないようにする。
    const form = e.currentTarget; // form要素取得
    const data = new FormData(form);
    // const name = data.get('name'); //name属性="name"の値を取得
    const res = await fetch('/api/uncontrolled', {
      method: 'POST',
      body: data,
    });
    if (!res.ok) {
      console.log('送信失敗', res.status);
      return;
    }
    const json = await res.json();
    console.log('レスポンス：', json);
  };
  return (
    <div className='p-10'>
      <ReturnButton />
      <Description />
      <Card>
        <CardTitle>uncontrolled Component form</CardTitle>
        <p>formDataを使用してデータを取得</p>
        <p>サーバ側でもformDataで取得</p>
        <form
          action=''
          className='space-y-2.5'
          onSubmit={handlerOnSubmit}
          noValidate
        >
          <Label htmlFor='name'>name</Label>
          <Input type='text' placeholder='name' id='name' name='name' />
          <Label htmlFor='email'>email</Label>
          <Input type='email' placeholder='email' id='email' name='email' />
          <Button>送信</Button>
        </form>
      </Card>
    </div>
  );
};

export default Page;
