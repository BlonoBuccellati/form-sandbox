import Link from 'next/link';
import { Button } from './ui/button';

const ReturnButton = () => {
  return (
    <Link href='/'>
      <Button>Home</Button>
    </Link>
  );
};

export default ReturnButton;
