import React from "react";
import Image from "next/image";

export default function NotFound() {
    return (
        <main>
            <header>
                <h1 className="logo-text">🌼 Tanemin</h1>
            </header>
        <div  className="dangger-container">
            <Image src="/assets/404.png"  className="dangger-image" alt="Not Found"  width={628} height={180} />
            <div  className="dangger-text">
                <h2  className="dangger-title">Oops!! Not Found</h2>
                <p>The page that you were looking for probably is not exist anymore</p>
            </div>
            <a href="#"  className="btn-style">Back to home</a>
        </div>
    </main>        
       
    );
}


