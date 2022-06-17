import React from "react";
import { Badge, Image, Tag } from "@chakra-ui/react";

interface Props {
    plant: any;
}

const PlantDetail = ({ plant }: Props) => {
    const { imageCover, plantName, type, tags } = plant;
    return (
        <div className="member-plant-header">
            <Image
                src={imageCover}
                fallbackSrc="https://via.placeholder.com/150"
                alt="Cooking master"
                maxHeight={200}
            />
            <div>
                <h3 className="member-plant-title">{plantName}</h3>
                <div className="member-plant-detail">
                    <div className="member-plant-type">
                        <p>Type :</p>
                        {type.map((item: any, i: number) => (
                            <Tag
                                margin={"1"}
                                colorScheme={"green"}
                                variant="solid"
                                key={i}
                                size="sm"
                            >
                                {item}
                            </Tag>
                        ))}
                    </div>
                    <div className="member-plant-tags">
                        <p>Tags :</p>
                        {tags.map((item: any, i: number) => (
                            <Tag
                                margin={"1"}
                                colorScheme={"blue"}
                                variant="solid"
                                key={i}
                                size="sm"
                            >
                                {item}
                            </Tag>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlantDetail;
