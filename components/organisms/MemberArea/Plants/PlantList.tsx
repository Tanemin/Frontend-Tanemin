import React from "react";
import { PlantTypes } from "../../../../services/data-types";
import CardContainer from "../../../molecules/CardContainer";

interface Props {
    plants: any;
}

const PlantList = ({ plants }: Props) => {
    return (
        <section className="featured">
            <h2 className="featured_title">Tanaman Terbaik Kami</h2>

            <div className="item_list">
                {plants.map((item: PlantTypes) => (
                    <CardContainer
                        key={item.id}
                        plantName={item.plantName}
                        author="SehatPedia"
                        imageUrl={item.imageCover}
                        href={`plants/${item.id}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default PlantList;
