import ReturnButton from '@/components/return-button';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
const Description = () => {
  return (
    <div className='py-10 space-y-4'>
      <h1 className='text-2xl font-bold'>処理の流れ（Server Function）</h1>
      <ol className='list-decimal'>
        <li>formのonSubmitは記載不要（reactのactionプロパティの挙動で十分）</li>
        <li>
          actionに登録されたイベントが非同期でサーバで実行（e.preventDefault()がデフォルトで実行）
          <br />
          <b>※use clientと併用は出来ない。</b>
        </li>
      </ol>
    </div>
  );
};
function Page() {
  async function addToCart(formData: FormData) {
    // use clientと併用不可。
    'use server';
    // 以下、サーバで実行される。
    const productId = formData.get('productId');
    console.log(productId);
  }
  return (
    <>
      <ReturnButton />
      <Description />
      <form action={addToCart}>
        <Input name='productId' value={'データ'} readOnly />
        <Button type='submit'>Add to Cart</Button>
      </form>
    </>
  );
}

export default Page;
