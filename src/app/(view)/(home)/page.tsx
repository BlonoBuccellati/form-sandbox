import { Button } from '@/components/ui/button';
import Link from 'next/link';

type LinkButtonProps = {
  href: string;
  title: string;
};
const LinkButton = ({ href, title }: LinkButtonProps) => {
  return (
    <Link href={href} className='block w-full'>
      <Button className='w-full'>{title}</Button>
    </Link>
  );
};

export default function Home() {
  return (
    <div className='p-5 space-y-5 max-w-[80%] min-w-[360px] mx-auto'>
      <LinkButton
        href='uncontrolled-default'
        title='uncontrolled Component(デフォルトの動作）'
      />
      <LinkButton href='uncontrolled' title='uncontrolled Component' />
      <LinkButton
        href='uncontrolled-react-form'
        title='controlled Component（react19のform)'
      />
      <LinkButton
        href='uncontrolled-react-form-use-server'
        title='controlled Component（react19のformでイベント内でuse server)'
      />
      <LinkButton href='controlled' title='controlled Component' />
    </div>
  );
}
