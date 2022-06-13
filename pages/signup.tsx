import React, { useState } from 'react';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';
import { useRouter } from 'next/router';

export default function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(name, email, password);
    router.push('/signin');
  };

  return (
    <div className="register">
      <h1>
        Lets <span className="underline">Start New</span> Journey
      </h1>
      <form action="" onSubmit={onSubmit} className="regis">
        <Input
          name="fullname"
          field="Full Name"
          id="fullname"
          type="text"
          value={name}
          changeInput={(e: any) => setName(e.target.value)}
        />
        <Input
          name="email"
          field="Email"
          id="email"
          type="email"
          value={email}
          changeInput={(e: any) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          field="Password"
          id="password"
          type="password"
          value={password}
          changeInput={(e: any) => setPassword(e.target.value)}
        />
        <button className="secondary">Sign In</button>{' '}
      </form>
      <p className="text-or2">or continue with </p>
      <Button value="Sign up with Google" assets="google.svg" />
      <Button value="Sign up with Facebook" assets="fb.svg" />
    </div>
  );
}
