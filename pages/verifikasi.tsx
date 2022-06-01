import React from "react";
import Image from "next/image";

export default function Verifikasi() {
    return (
        <main>
            <header>
                <h1 className="logo-text">🌼 Tanemin</h1>
            </header>
        <div  className="dangger-container">
            <Image src="/assets/Register.png" className="dangger-image" alt="Registration"  width={500} height={323.7} />
            <div className="dangger-text">
                <h2 className="dangger-title">Verify Your Email</h2>
                <p>Please check your email address for verification link</p>
            </div>
            <a href="#" className="btn-style">Back to home</a>
        </div>
    </main>        
       
    );
}


