'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useActionState } from 'react';
import { increment } from './increment';

function StatefulForm() {
  console.log('通常のformの挙動（再レンダリングされる）');
  const [state, formAction, isPending] = useActionState(increment, 0);
  return (
    <>
      <Description />
      {isPending ? (
        <p>pending...（送信中...）</p>
      ) : (
        <form className='space-y-1'>
          <Input type='text' name='inputTest' />
          <div>{state}</div>
          <Button formAction={formAction}>Increment</Button>
        </form>
      )}
    </>
  );
}
export default StatefulForm;

const Description = () => {
  return (
    <div className='py-10 space-y-4'>
      <h1 className='text-2xl font-bold'>useActionState()とは？</h1>
      <p>フォームの状態管理（送信中・エラー・結果、FormDataなど）</p>
      <h1 className='text-2xl font-bold'>処理の流れ（useActionState）</h1>
      <ol className='list-decimal'>
        <li>formのonSubmitは記載不要（reactのactionプロパティの挙動で十分）</li>
        <li>
          buttonのにformActionに登録されたイベントが非同期でサーバで実行（再レンダリングされる）
        </li>
      </ol>
    </div>
  );
};
