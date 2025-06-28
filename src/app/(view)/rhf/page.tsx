'use client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
};
const Page = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm<FormData>();

  const onSubmit = handleSubmit((data: FormData) => console.log(data)); // ここでe.preventDefault()してるっぽい。
  console.log(register('email'));
  return (
    <form onSubmit={onSubmit}>
      <Label>Name</Label>
      <Input {...register('name')} />
      <Label>Email</Label>
      <Input {...register('email')} />
      <Button
        onClick={() => {
          setValue('name', 'luo');
          setValue('email', 'なんだこれ？');
          console.log('register()', register('email'));
          console.log(errors.email);
          console.log(isLoading);
        }}
      >
        SetValue
      </Button>
    </form>
  );
};

export default Page;
