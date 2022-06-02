import React from "react";
import Image from "next/image";

export default function Register() {
    return (
        <main>
            <div  className="register" >
            <h1>Lets Start New Journey<div  className="rectangle"></div></h1>
        
                <form action=""  className="regis">
                    <div  className="form-group">
                        <label  className="control-label">Full Name</label> <br />
                        <input  className="form-control" name="fullname" id="fullname" type="text" />
                    </div>
                    <div  className="form-group">
                        <label  className="control-label">Favorite Plant</label> <br />
                        <input  className="form-control" name="favorite" id="favorite" type="text" />
                    </div>
                    <div  className="form-group">
                        <label  className="control-label">Email</label> <br/>
                        <input  className="form-control" name="email" id="email" type="email"/> 
                    </div>
                    <div  className="form-group">
                        <label  className="control-label">Password</label><br/>
                        <input  className="form-control" name="password" id="password" type="password" />
                    </div>
                    <button  className="secondary">Sign In</button>
                    <p  className="text-or2">or continue with </p>
                    <button   className="btn-google">
                        <Image src="/assets/google.svg" alt="" width={25.41} height={26} /> Sign In with
                        Google</button><br />
                    <button   className="btn-fb"><Image src="/assets/fb.svg" alt="" width={25.41} height={26}/> Sign In with Facebook</button>
                </form>
            </div>
        </main>        
       
    );
}