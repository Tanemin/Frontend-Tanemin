import React from "react";
import MemberLayout from "../../../components/organisms/Layout/MemberLayout";
import { getTopPlant } from "../../../services/plant-list";
import PlantList from "../../../components/organisms/MemberArea/Plants/PlantList";

interface Props {
    plants: any;
}

const plants = ({ plants }: Props) => {
    return (
        <MemberLayout>
            <PlantList plants={plants} />
        </MemberLayout>
    );
};

export const getServerSideProps = async () => {
    const plants = await getTopPlant();

    console.log(plants);
    return {
        props: {
            plants,
        },
    };
};

export default plants;
