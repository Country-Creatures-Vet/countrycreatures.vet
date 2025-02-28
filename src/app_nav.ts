
export const app_nav = [
    {
        label: "About",
        nav: [
            {
                label: "Our Team",
                path: "/about/our-team"
            },
            {
                label: "FAQs",
                path: "/about/faqs"
            },
            {
                label: "Photo Gallery",
                path: "/about/photo-gallery"
            }
        ]
    },
    {
        label: "Services",
        nav: [
            {
                label: "Equine",
                path: "/services/equine"
            },
            {
                label: "Cattle",
                path: "/services/cattle"
            },
            {
                label: "Small Ruminants",
                path: "/services/small-ruminants"
            },
            {
                label: "Pig",
                path: "/services/pig"
            }
        ]
    },
    {
        label: "Resources",
        nav: [
            {
                label: "New Client Form",
                path: "/resources/new-client-form"
            },
            {
                label: "Consent to Treat Form",
                path: "/resources/consent-to-treat-form"
            },
            {
                label: "Payment Options",
                path: "resources/payment-options"
            }
        ]
    },
    {
        label: "Contact",
        nav: [
            {
                label: "(864) 337-3758",
                tooltip: "Click to copy",
                onClick: async () => {
                    try {
                        await navigator.clipboard.writeText("(864) 337-3758");
                        // alert("Copied to clipboard!");
                    } catch (err) {
                        console.error("Failed to copy: ", err);
                    }
                }
            },
            {
                label: "countrycreaturesvet@gmail.com",
                href: "mailto:countrycreaturesvet@gmail.com",
                icon: "mail"
            },
            {
                label: "Submit a Question"
            }
        ]
    }
]