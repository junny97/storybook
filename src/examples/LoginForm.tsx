import { Button } from '@/components';
import { Input } from '@/components/Input/Input';
import { Box } from '@/components/Layout/Box/Box';
import { Stack } from '@/components/Layout/Stack/Stack';
import { Text } from '@/components/Text/Text';

export const LoginForm = () => {
  return (
    <Box className='px-24 py-12 border border-gray-400 rounded-xl'>
      <Stack>
        <Text
          as='h2'
          weight='bold'
          align={'center'}
          size={'3xl'}
          className='mb-2'
        >
          login
        </Text>
        <Text
          as='span'
          emphasis={'low'}
          size={'sm'}
          align={'center'}
          className='mb-8'
        >
          please enter your Login Info
        </Text>
        <Text
          as='label'
          htmlFor='username'
          size={'sm'}
          weight={'medium'}
          className='mb-1.5'
        >
          username
        </Text>
        <Input
          type='text'
          id='username'
          placeholder='Username'
          className='mb-4'
        />

        <Text
          as='label'
          htmlFor='password'
          size={'sm'}
          weight={'medium'}
          className='mb-1.5'
        >
          Password
        </Text>
        <Input id='password' type='password' placeholder={'Password'} />

        <Button type='submit' variant={'solid'} className='mt-10'>
          Login
        </Button>
      </Stack>
    </Box>
  );
};
