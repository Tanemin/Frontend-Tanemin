import React from 'react';
import Input from '../components/atoms/Input';
import Button from '../components/atoms/Button';

export default function Register() {
  return (
    <div className="register">
      <h1>
        Lets <span className="underline">Start New</span> Journey
      </h1>
      <form action="" className="regis">
        <Input name="fullname" field="Full Name" id="fullname" type="text" />
        <Input name="email" field="Email" id="email" type="email" />
        <Input name="password" field="Password" id="password" type="password" />
        <button className="secondary">Sign In</button>
        <p className="text-or2">or continue with </p>
        <Button value="Sign In With Google" assets="google.svg" />
        <Button value="Sign In With Facebook" assets="fb.svg" />
      </form>
    </div>
  );
}
