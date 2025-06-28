'use server';

export async function increment(previousState: number, formData: FormData) {
  const test = formData.get('inputTest');
  console.log(test);
  return previousState + 1;
}
