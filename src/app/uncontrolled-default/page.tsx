'use client';

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Page = () => {
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
    <div className='p-10'>
      <div className='py-10 space-y-4'>
        <h1 className='text-2xl font-bold'>処理の流れ</h1>
        <ol className='list-decimal'>
          <li>Submitイベント発火</li>
          <li>
            action/methodを見て、actionのURLにページ遷移
            <br />
            （actionに指定がなければ同じ画面に遷移するためリロード）
          </li>
        </ol>
      </div>
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
    </div>
  );
};

export default Page;
