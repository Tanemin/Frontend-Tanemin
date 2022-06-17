import { Image } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
interface CardData {
    imageUrl?: string;
    plantName: string;
    author: string;
    href: string;
}

export default function CardContainer(props: CardData) {
    const {
        imageUrl = "/assets/content-img.jpg",
        plantName,
        author,
        href,
    } = props;
    return (
        <Link href={href} passHref>
            <div className="card-content hover-pointer">
                <div className="card-content__image">
                    <Image
                        src={imageUrl}
                        fallbackSrc="https://via.placeholder.com/150"
                        alt="Plants Category"
                    />
                </div>
                <div className="card-content__info">
                    <p className="food-name">{plantName}</p>
                    <p className="food-author">{author}</p>
                    <div className="star-container"></div>
                </div>
            </div>
        </Link>
    );
}
