import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import MemberLayout from "../../../components/organisms/Layout/MemberLayout";
import PlantDetail from "../../../components/organisms/MemberArea/Plants/PlantDetail";
import Schedule from "../../../components/organisms/MemberArea/Plants/Schedule";
import { getDetailPlant } from "../../../services/plant-list";

interface Props {
    plant: any;
}

const PlantDetailPage = ({ plant }: Props) => {
    return (
        <MemberLayout>
            <div>
                <Link href={"/member/plants"}>{`< Back `}</Link>
                <PlantDetail plant={plant} />
                <Schedule />
            </div>
        </MemberLayout>
    );
};

export const getServerSideProps = async (context: any) => {
    const { id } = context.query;

    const plant = await getDetailPlant(id);

    return {
        props: {
            plant,
        },
    };
};

export default PlantDetailPage;
