import React from "react";
import Image from "next/image";

export default function Login() {
    return (
        <div  className="container">
        <div  className="text-hero">
            <h1>
                Sign In to Learn <br />
                How to Plant
            </h1>
            <p>
                When you are attracted by a plant grown
                by yourself, happiness is priceless.
            </p>
            <div  className="link">If you have no account please <br /> <a href="#">register new account</a>
            </div>
        </div>
        <main>
            <div  className="form">
                <form>
                    <div  className="form-group">
                        <label  className="control-label">Email</label> <br />
                        <input  className="form-control" name="email" id="email" type="email" />
                    </div>
                    <div  className="form-group">
                        <label  className="control-label">Password</label><br />
                        <input  className="form-control" name="password" id="password" type="password" />
                    </div>
                    <button  className="secondary">Sign In</button>
                    <p  className="text-or">or continue with </p>
                    <button  className="btn-google">
                        <Image src="/assets/google.svg" alt="" width={25.41} height={26} /> Sign In with
                        Google</button><br />
                    <button  className="btn-fb"><Image src="/assets/fb.svg" alt="" width={25.41} height={26}/> Sign In with Facebook</button>
                </form>
            </div>
        </main>
    </div>        
       
    );
}