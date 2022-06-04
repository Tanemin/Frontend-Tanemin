import React from 'react';
import Button from '../components/atoms/Button';
import Input from '../components/atoms/Input';

export default function Login() {
  return (
    <div className="login-container">
      <div className="text-hero">
        <h1>
          <span className="underline">Sign</span>In to Learn <br />
          How to <span className="underline">Plant</span>
        </h1>
        <p>
          When you are attracted by a plant grown by yourself, happiness is
          priceless.
        </p>
        <div className="link">
          If you have no account please <br />{' '}
          <a href="#">register new account</a>
        </div>
      </div>
      <div className="form">
        <form>
          <Input name="email" id="email" field="Email" type="email" />
          <Input
            name="password"
            id="password"
            field="Password"
            type="password"
          />
          <button className="secondary">Sign In</button>
        </form>
        <p className="text-or">or continue with </p>
        <Button value="Sign In With Google" assets="google.svg" />
        <Button value="Sign In With Facebook" assets="fb.svg" />
      </div>
    </div>
  );
}
