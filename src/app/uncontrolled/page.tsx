'use client';

import { Button } from '@/components/ui/button';
import { Card, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Page = () => {
  const handlerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget; // form要素取得
    const data = new FormData(form);
    const name = data.get('name');//name属性="name"の値を取得
    console.log(name);
  };
  return (
    <div className='p-10'>
      <Card>
        <CardTitle>uncontrolled Component form</CardTitle>
        <form action='' className='space-y-2.5' onSubmit={handlerOnSubmit}>
          <Label htmlFor='name'>name</Label>
          <Input type='text' placeholder='name' id='name' name='name' />
          <Button>送信</Button>
        </form>
      </Card>
    </div>
  );
};

export default Page;
