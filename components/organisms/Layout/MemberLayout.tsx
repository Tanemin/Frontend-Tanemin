import React from "react";
import type { ReactElement } from "react";
import ProfileHeader from "../MemberArea/ProfileHeader";
import Overview from "../../../public/assets/member-area/Overview";
import Transactions from "../../../public/assets/member-area/Transactions";
import Messages from "../../../public/assets/member-area/Messages";
import Card from "../../../public/assets/member-area/Card";
import Rewards from "../../../public/assets/member-area/Rewards";
import Settings from "../../../public/assets/member-area/Settings";
import Logout from "../../../public/assets/member-area/Logout";
import SidebarFooter from "../MemberArea/SidebarFooter";

interface Props {
    children: ReactElement;
}

const MemberLayout = ({ children }: Props) => {
    return (
        <section className="overview overflow-auto">
            <section className="sidebar">
                <div className="content pt-50 pb-30 ps-30">
                    <ProfileHeader />
                    <div className="menus">
                        {LINKS_DATA.map((item, index) => (
                            <div
                                className={`item ${
                                    index == 0 ? "active" : ""
                                } mb-30`}
                                key={index}
                            >
                                {item.icon}
                                <p className="item-title m-0">
                                    <a
                                        href={item.link}
                                        className="text-lg text-decoration-none"
                                    >
                                        {item.label}
                                    </a>
                                </p>
                            </div>
                        ))}
                    </div>
                    <SidebarFooter />
                </div>
            </section>
            <main className="main-wrapper">{children}</main>
        </section>
    );
};

const LINKS_DATA = [
    {
        label: "Overview",
        link: "/member",
        icon: <Overview />,
    },
    {
        label: "Plants",
        link: "/member/plants",
        icon: <Overview />,
    },
    {
        label: "Transactions",
        link: "/member/transactions",
        icon: <Transactions />,
    },
    {
        label: "Messages",
        link: "",
        icon: <Messages />,
    },
    {
        label: "Card",
        link: "",
        icon: <Card />,
    },
    {
        label: "Rewards",
        link: "",
        icon: <Rewards />,
    },
    {
        label: "Settings",
        link: "",
        icon: <Settings />,
    },
    {
        label: "Log Out",
        link: "",
        icon: <Logout />,
    },
];

export default MemberLayout;
