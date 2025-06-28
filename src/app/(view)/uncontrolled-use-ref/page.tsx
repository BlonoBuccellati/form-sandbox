'use client';

import ReturnButton from '@/components/return-button';
import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useRef } from 'react';
const Description = () => {
  return (
    <div className='py-10 space-y-4'>
      <h1 className='text-2xl font-bold'>処理の流れ</h1>
      <ol className='list-decimal'>
        <li>formのonSubmit実行</li>
        <li>
          e.preventDefault()でデフォルトの挙動（method,action）を止め、ページ遷移、HTTP通信を防ぐ。
        </li>
        <li>DOMからデータを取得</li>
        <li>APIエンドポイントにリクエスト</li>
      </ol>
    </div>
  );
};
const Page = () => {
  console.log('レンダリング');
  const handlerOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // デフォルトの挙動を抑止し、action、method,ページ遷移しないようにする。
    const name = nameRef.current?.value || '';
    const mail = mailRef.current?.value || '';
    alert(`${name},${mail}`);
    // const name = data.get('name'); //name属性="name"の値を取得
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', mail);
    const res = await fetch('/api/uncontrolled', {
      method: 'POST',
      body: formData,
    });
    if (!res.ok) {
      console.log('送信失敗', res.status);
      return;
    }
    const json = await res.json();
    console.log('レスポンス：', json);
  };

  const nameRef = useRef<HTMLInputElement>(null);
  const mailRef = useRef<HTMLInputElement>(null);
  return (
    <div className='p-10'>
      <ReturnButton />
      <Description />
      <Card>
        <CardTitle>uncontrolled Component form（useRef使用）</CardTitle>
        <p>DOMからデータを取得</p>
        <p>サーバ側でもformDataで取得</p>
        <form
          onSubmit={handlerOnSubmit}
          action=''
          className='space-y-2.5'
          noValidate
        >
          <Label htmlFor='name'>name</Label>
          <Input
            type='text'
            placeholder='name'
            id='name'
            name='name'
            ref={nameRef}
          />
          <Label htmlFor='email'>email</Label>
          <Input
            type='email'
            placeholder='email'
            id='email'
            name='email'
            ref={mailRef}
          />
          <Button>送信</Button>
        </form>
      </Card>
    </div>
  );
};

export default Page;
