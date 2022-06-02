import React from 'react';
import Button from '../components/atoms/Button';

export default function Login() {
  return (
    <div className="login-container">
      <div className="text-hero">
        <h1 className="h1">
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
      <main>
        <div className="form">
          <form>
            <div className="form-group">
              <label className="control-label">Email</label> <br />
              <input
                className="form-control"
                name="email"
                id="email"
                type="email"
              />
            </div>
            <div className="form-group">
              <label className="control-label">Password</label>
              <br />
              <input
                className="form-control"
                name="password"
                id="password"
                type="password"
              />
            </div>
            <button className="secondary">Sign In</button>
          </form>
          <p className="text-or">or continue with </p>
          <Button value="Sign In With Google" assets="google.svg" />
          <Button value="Sign In With Facebook" assets="fb.svg" />
        </div>
      </main>
    </div>
  );
}
