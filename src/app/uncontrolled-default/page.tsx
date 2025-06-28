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
        <li>Submitイベント発火（あれば）</li>
        <li>
          action/methodを見て、actionのURLにページ遷移
          <br />
          （actionに指定がなければ同じ画面に遷移するためリロード）
          <br />
          ※デフォルトでmethodはgetメソッド
        </li>
      </ol>
    </div>
  );
};

const DefaultForm = () => {
  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // submit直後、以下の処理実行後にPOSTされる。
    const form = e.currentTarget; // form要素取得
    const data = new FormData(form);
    const name = data.get('name'); //name属性="name"の値を取得
    console.log(name);
    fetch('api/uncontrolled-default'); // getメソッドが走る
    // リロード（またはactionのURLに遷移）する。
  };
  return (
    <Card>
      <CardTitle>uncontrolled Component form（デフォルト）</CardTitle>
      <p>古いやり方（使用しない）</p>
      <p>action: 指定しなければ、ページはリロードされる</p>
      <form
        method='post'
        action='/api/uncontrolled-default'
        className='space-y-2.5'
        onSubmit={handlerOnSubmit}
      >
        <Label htmlFor='name'>name</Label>
        <Input type='text' placeholder='name' id='name' name='name' />
        <Button>送信</Button>
      </form>
    </Card>
  );
};

const Page = () => {
  return (
    <div className='p-10'>
      <ReturnButton />
      <Description />
      <DefaultForm />
    </div>
  );
};

export default Page;
