import React from "react";
import Image from "next/image";

export default function Complated() {
    return (
        <main>
            <header>
                <h1 className="logo-text">🌼 Tanemin</h1>
            </header>
        <div  className="dangger-container">
            <Image src="/assets/Scenes.png" className="dangger-image" alt="Completed Transaction"  width={431.19} height={323} />
            <div className="dangger-text">
                <h2 className="dangger-title">Yeay! Completed</h2>
                <p>You just finished buying plant and now time to improve your planting productivity</p>
            </div>
            <a href="#" className="btn-style">Back to home</a>
        </div>
    </main>        
       
    );
}


