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
        <li>formのonSubmitは記載不要（reactのactionプロパティの挙動で十分）</li>
        <li>
          actionに登録されたイベント実行（e.preventDefault()がデフォルトで実行）
        </li>
        <li>
          actionに登録されたイベントの引数に、FormDataが入ってくる（データ取得）
        </li>
        <li>APIエンドポイントにリクエスト</li>
      </ol>
    </div>
  );
};
const Page = () => {
  console.log('レンダリング');

  const handle = async (data: FormData) => {
    // e.preventDefault(); を書かなくてもOK（デフォルトの挙動を抑止し、action、method,ページ遷移しないようにする。）
    // なのでonSubmitは不要
    // const query = data.get('name'); //name属性="name"の値を取得
    const res = await fetch('/api/uncontrolled', {
      method: 'POST',
      body: data,
    });
    alert(`res.ok？:${res.ok}`);
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
          action={handle}
          className='space-y-2.5'
          // onSubmit={handlerOnSubmit} ←不要
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
