import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<'button'>;

export default function Button({ ...props }: ButtonProps) {
  return (
    <button
      className='text-blue-500 border border-gray-200'
      {...props}
    ></button>
  );
}
