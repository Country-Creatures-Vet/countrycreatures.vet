
import React from "react";

import { KDSApp, KDSLightTheme, KDSPage } from "@xlib/lib-kds";

import AboutPage from "about/AboutPage.react";
import HomePage from "HomePage.react";
import { app_nav } from "app_nav";
import { app_actions } from "app_actions";

export default function App(): React.ReactElement {
    return (
        <KDSApp
            title="Mobile Veterinary Hospital In Pendleton, SC | Country Creatures Veterinary Care"
            icon={{
                name: "Pets",
                color: "primary",
                ico: "/assets/menu.ico",
            }}
            actions={app_actions}
            nav={app_nav}
            theme={{
                ...KDSLightTheme,
                font: {
                    active: "rgba(234, 162, 47, 1)",
                    primary: "black",
                    secondary: "white",
                    disabled: "grey",
                    header: "white",
                },
                icon: {
                    primary: "white",
                    active: "white",
                    disabled: "white",
                    negative: "white",
                },
                app: {
                    primary: "rgba(99, 35, 37, 1)",
                    secondary: "rgba(234, 162, 47, 1)"
                }
            }}
            route={{
                "/": HomePage,
                "/about": AboutPage,
                "/*": () => <KDSPage>Not yet implemented!</KDSPage>,
                "/it/is/a/me": () => <KDSPage>A Mario!</KDSPage>
            }}
        >
        </KDSApp >
    );
}
