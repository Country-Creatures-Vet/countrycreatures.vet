import React from "react";

import { KDSCarousel, KDSFlexItem, KDSFlexLayout, KDSGridItem, KDSGridLayout, KDSMargin, KDSPadding, KDSPage, KDSText, KDSVideo } from "@xlib/lib-kds";

export default function HomePage(): React.ReactElement {
    const render = (content: ReadonlyArray<React.ReactElement>): React.ReactElement => {
        return (
            <KDSFlexLayout direction="column" style={{
                textShadow: "2px 2px 4px rgba(0, 0, 0, 1)",
            }}>
                {content.map((c, index) => (
                    <KDSFlexItem key={index} alignSelf="center">
                        <KDSText style={{ width: "100%", color: "white", fontSize: "20px", textAlign: "center" }}>
                            {c}
                        </KDSText>
                    </KDSFlexItem>
                ))}
            </KDSFlexLayout>
        );
    };
    const welcome = render([
        (
            <>
                <h1>
                    WELCOME TO COUNTRY
                </h1>
                <h1 >
                    CREATURES VETERINARY CARE
                </h1>
            </>),
        (<>
            We provide mobile veterinary services for your animals in Pendleton, SC area.
        </>),
        (<a href="https://vet.digitail.io/clinics/country-creatures-veterinary-care?" target="_blank" >
            <button>
                SCHEDULE AN APPOINTMENT
            </button>
        </a>)
    ]);

    const service = (icon: string, name: string, iconBackground: string = "rgba(99, 35, 37, 1)", background: string = "rgba(234, 162, 47, 1)") => {
        return (
            <div style={{
                backgroundImage: `linear-gradient(180deg,#ffffff 38%,${background} 38%)`,
                backgroundColor: "white",
                width: "200px",
                borderRadius: "24px",
                margin: KDSMargin.all_48,
                padding: KDSPadding.vert_8
            }}>
                <span style={{
                    width: "120px",
                    display: "block",
                    borderRadius: "100% 100% 100% 100%",
                    overflow: "hidden",
                    border: "10px solid white",
                    backgroundColor: iconBackground,
                    marginLeft: "auto",
                    marginRight: "auto",
                    padding: KDSPadding.vert_8_horiz_8
                }}>
                    <img src={icon} style={{
                        borderRadius: "inherit",
                        maxWidth: "100%",
                        height: "auto",
                    }} />
                </span>
                <div style={{
                    textAlign: "center",
                    height: "50%"
                }}>
                    <KDSText
                        size="large"
                        weight="bold"
                        style={{
                            color: "white",
                            margin: KDSMargin.all_16
                        }}>
                        {name}
                    </KDSText>
                    <button>Learn More</button>
                </div>
            </div>
        );
    }

    return (
        <KDSPage>
            <KDSFlexLayout
                direction="column"
                style={{
                    height: "100%",
                    overflowY: "auto"
                }}>
                <KDSFlexItem grow={0}>
                    <KDSCarousel background={<KDSVideo src={`${import.meta.env.BASE_URL}assets/home/Large-animals.mp4`} />}>
                        {welcome}
                    </KDSCarousel>
                </KDSFlexItem>
                <KDSFlexItem grow={0} alignSelf="center">
                    <KDSFlexLayout direction="row-reverse" margin={KDSMargin.vert_48} style={{
                        flexWrap: "wrap"
                    }}>
                        <KDSFlexItem>
                            <KDSFlexLayout direction="column" style={{ minWidth: "360px", maxWidth: "560px", height: "auto", margin: KDSMargin.horiz_48 }}>
                                <h1>Mobile Veterinary Services in South Carolina</h1>
                                <KDSText
                                    size="large"
                                    style={{
                                        lineHeight: "1.25em",
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: undefined,
                                        textOverflow: undefined,
                                        margin: KDSMargin.bot_24
                                    }}>
                                    Welcome to <b style={{
                                        color: "rgba(99, 35, 37, 1)"
                                    }}>Country Creatures Veterinary Care</b>, a mobile veterinary service where our passion for animals drives everything we do. We proudly serve diverse species, including equine, cattle, and small ruminants. We are pleased to offer convenient mobile veterinary services, bringing our expertise right to your doorstep.
                                </KDSText>
                                <KDSText
                                    size="large"
                                    style={{
                                        lineHeight: "1.25em",
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: undefined,
                                        textOverflow: undefined,
                                        margin: KDSMargin.bot_24
                                    }}>
                                    Our mission is to nurture the health, happiness, and vitality of every animal we encounter. At Country Creatures, we hold dear our core values of compassion, integrity, excellence, and innovation, which guide our practice and ensure that your pets receive the best care possible.
                                </KDSText>
                                <button><KDSText>More About Us</KDSText></button>
                            </KDSFlexLayout>
                        </KDSFlexItem>
                        <KDSFlexItem grow={0}
                            margin={KDSMargin.horiz_48}>
                            <img src={`${import.meta.env.BASE_URL}assets/home/berr-standing-next-to-a-horse.jpg`} style={{
                                maxWidth: "500px",
                                minWidth: "250px",
                                height: "auto",
                                border: "20px solid #F9F9F9"
                            }} />
                        </KDSFlexItem>
                    </KDSFlexLayout>
                </KDSFlexItem>
                <KDSFlexItem>
                    <KDSFlexLayout direction="column" style={{
                        backgroundColor: "rgb(237, 237, 237)",
                        padding: KDSPadding.vert_48_horiz_48
                    }}>
                        <KDSFlexItem alignSelf="center" style={{ alignText: "center" }}>
                            <KDSText size="large" weight="bold">Now offfering  Flex Scheduling and Client Co-Operative Scheduling</KDSText>
                        </KDSFlexItem>
                        <KDSFlexItem
                            alignSelf="center" style={{
                                width: "100%",
                                margin: KDSMargin.all_48
                            }}>
                            <KDSText style={{
                                lineHeight: "1.5em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                            }}><b>Flex scheduling</b> gets clients 20% off the farm call fee for their area if they are available in a 1-2 week span on multiple days and open availability in timing; this is for making it convenient for us to drop in at their farm when we are already in their area. This only applies to non-urgent wellness appointments.</KDSText>
                        </KDSFlexItem>
                        <KDSFlexItem>
                            <KDSText style={{
                                lineHeight: "1.5em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                            }}>
                                <b>Client Co-Operative scheduling</b> will give clients a 50% discount on the farm call fee. This is when clients within a 5-mile radius of each other, typically neighbors, coordinate and schedule their farm calls together. This is an excellent choice for producers that are in need of routine herd work and have relationships with neighboring farms. This also only applies to non-urgent appointments.
                            </KDSText>
                        </KDSFlexItem>
                    </KDSFlexLayout>
                </KDSFlexItem>

                <KDSFlexItem>
                    <KDSFlexLayout direction="column" style={{
                        backgroundColor: "rgba(234, 162, 47, 1)",
                        padding: KDSPadding.vert_48_horiz_48
                    }}>
                        <KDSFlexItem alignSelf="center" style={{ alignText: "center" }}>
                            <KDSText size="x-large" weight="bold" style={{
                                color: "white"
                            }}>Emergency Care</KDSText>
                        </KDSFlexItem>
                        <KDSFlexItem
                            alignSelf="center" style={{
                                width: "100%",
                                margin: KDSMargin.all_24
                            }}>
                            <KDSText style={{
                                lineHeight: "1.5em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                color: "white"
                            }}><b style={{ color: "rgba(99, 35, 37, 1)" }}>Country Creatures Veterinary Care</b> provides large animal emergency services for current clients until 10 p.m. each day, and we can be reached at <a href="tel:864-337-3758" style={{
                                textDecoration: "none",
                                display: "inline-block"
                            }}>
                                    <KDSText weight="bold" style={{

                                        color: "rgba(99, 35, 37, 1)"
                                    }}>
                                        (864) 337-3758
                                    </KDSText>
                                </a>.</KDSText>
                        </KDSFlexItem>
                        <KDSFlexItem alignSelf="center">
                            <button>Learn More</button>
                        </KDSFlexItem>
                    </KDSFlexLayout>
                </KDSFlexItem>

                <KDSFlexItem style={{
                    position: "relative",
                    backgroundColor: "#E9A22E",
                }}>
                    <div style={{
                        position: "absolute",
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        zIndex: 1,
                    }}>
                        <div style={{
                            pointerEvents: "none",
                            backgroundImage: `url('${import.meta.env.BASE_URL}assets/home/meet_dr_berr_background.svg')`,
                            backgroundSize: "100% 100%",
                            backgroundPosition: "center",
                            top: "0",
                            height: "300%",
                            transform: "scale(1,1)",
                            display: "block",
                            width: "100%",
                        }} />
                    </div>
                    <KDSFlexLayout direction="row" style={{
                        padding: KDSPadding.vert_48_horiz_48,
                        zIndex: 2,
                        flexWrap: "wrap"
                    }}>
                        <KDSFlexItem>
                            <KDSFlexLayout direction="column">
                                <KDSFlexItem alignSelf="center" style={{ alignText: "center" }}>
                                    <KDSText size="x-large" weight="bold" style={{
                                    }}>Meet Dr. Berr</KDSText>
                                </KDSFlexItem>
                                <KDSFlexItem
                                    alignSelf="center" style={{
                                        width: "100%",
                                        margin: KDSMargin.all_24
                                    }}>
                                    <KDSText style={{
                                        lineHeight: "1.5em",
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: undefined,
                                        textOverflow: undefined,
                                    }}>
                                        Dr. Berr grew up in Phoenix, Arizona, riding horses and ranching with her family. She then went to Colorado State University for her Bachelor’s in Animal Sciences, where she met her husband, Scott; upon completion of her Bachelor’s, she worked in Holyoke, Colorado, on a sow farm before moving to Texas for a Master’s in Biomedical Sciences at Texas A& M University. Finally, Colorado called her back for her Doctor of Veterinary Medicine degree. She graduated from Colorado State University in May of 2021. Dr Berr has a strong interest in livestock reproduction and large animal medicine. This passion led to the founding of Country Creatures Veterinary Care, an ambulatory large animal-focused veterinary clinic.
                                    </KDSText>
                                </KDSFlexItem>
                                <KDSFlexItem alignSelf="center" style={{
                                    margin: KDSMargin.bot_24
                                }}>
                                    <button>Meet the Team</button>
                                </KDSFlexItem>
                            </KDSFlexLayout>
                        </KDSFlexItem>
                        <KDSFlexItem alignSelf="center">
                            <img src={`${import.meta.env.BASE_URL}assets/home/dr_berr.jpg`} style={{
                                maxWidth: "500px",
                                minWidth: "250px",
                                height: "auto",
                                border: "20px solid white",
                                borderRadius: "120px 120px 120px 120px"
                            }} />
                        </KDSFlexItem>
                    </KDSFlexLayout>
                </KDSFlexItem>

                <KDSFlexItem alignSelf="center" style={{
                    backgroundColor: "rgb(249, 249, 249)",
                    width: "100%",
                    padding: KDSPadding.vert_24
                }}>
                    <KDSFlexLayout direction="column" style={{
                        flexWrap: "wrap"
                    }}>
                        <KDSFlexItem alignSelf="center" direction="column" style={{
                            textAlign: "center"
                        }}>
                            <h1>Mobile Veterinary Services in Pendleton, SC</h1>
                            <KDSText
                                size="large"
                                style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                    margin: KDSMargin.bot_24
                                }}>We provide veterinary services for pet healthcare, ensuring the well-being of your beloved animals.</KDSText>
                        </KDSFlexItem>
                        <KDSFlexItem>
                            <KDSFlexLayout
                                direction="row"
                                justifyContent="center"
                                style={{
                                    width: "100%",
                                    flexWrap: "wrap"
                                }}>
                                <KDSFlexItem>
                                    {service(`${import.meta.env.BASE_URL}assets/home/equine-icon-img.webp`, "Equine")}
                                </KDSFlexItem>
                                <KDSFlexItem>
                                    {service(`${import.meta.env.BASE_URL}assets/home/cattle-icon-img.webp`, "Cattle", "rgba(234, 162, 47, 1)", "rgba(99, 35, 37, 1)")}
                                </KDSFlexItem>
                                <KDSFlexItem>
                                    {service(`${import.meta.env.BASE_URL}assets/home/goat-icon-img.webp`, "Small Ruminants", "rgba(234, 162, 47, 1)", "rgba(99, 35, 37, 1)")}
                                </KDSFlexItem>
                                <KDSFlexItem>
                                    {service(`${import.meta.env.BASE_URL}assets/home/pig-icon-img.webp`, "Pigs")}
                                </KDSFlexItem>
                            </KDSFlexLayout>
                        </KDSFlexItem>
                        <KDSFlexItem grow={0} alignSelf="center">
                            <button> View All Services</button>
                        </KDSFlexItem>
                    </KDSFlexLayout>
                </KDSFlexItem>

                <KDSFlexItem style={{
                    margin: KDSMargin.all_48
                }}>
                    <KDSGridLayout
                        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))"
                        rowGap="16px"
                        columnGap="16px"

                        style={{
                            width: "100%",
                        }}>
                        <KDSGridItem>
                            <KDSText size="xx-large" style={{
                                lineHeight: "1.25em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                margin: KDSMargin.all_24
                            }}>We love our clients and patients!</KDSText>
                            <KDSText style={{
                                lineHeight: "1.25em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                margin: KDSMargin.all_24
                            }}>We thank all of our clients for trusting us with your pet's health and well-being.</KDSText>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                width: '100%'
                            }}>
                                <button style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}>Read More</button>
                            </div>
                        </KDSGridItem>
                        <KDSGridItem>
                            <KDSFlexLayout justifyContent="center">
                                <div style={{
                                    backgroundColor: "rgba(234, 162, 47, 1)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    padding: KDSPadding.vert_24_horiz_48
                                }}>
                                    <KDSText style={{
                                        textAlign: "center",
                                        lineHeight: "1.25em",
                                        wordWrap: "break-word",
                                        whiteSpace: "normal",
                                        overflow: undefined,
                                        textOverflow: undefined,
                                        color: "white"
                                    }}>
                                        Dr. Berr was great!! She was very kind to my horse and had great communication! I would highly recommend her for your large animal needs!
                                    </KDSText>
                                    <KDSText
                                        weight="bold"
                                        style={{
                                            textAlign: "center",
                                            color: "white",
                                            margin: KDSMargin.top_24
                                        }}>
                                        - Jeska H.
                                    </KDSText>
                                </div>
                            </KDSFlexLayout>
                        </KDSGridItem>
                        <KDSGridItem >
                            <KDSFlexLayout justifyContent="center">
                                <div style={{
                                    backgroundColor: "rgba(234, 162, 47, 1)",
                                    borderRadius: "24px",
                                    width: "100%",
                                    padding: KDSPadding.vert_24_horiz_48
                                }}>
                                    <KDSText
                                        style={{
                                            textAlign: "center",
                                            lineHeight: "1.25em",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            overflow: undefined,
                                            textOverflow: undefined,
                                            color: "white"
                                        }}>
                                        Dr Berr is an amazing caring vet who explained to me, a new pig owner, what my pig needs and how to best care for him. I would recommend her to anyone who has farm animals!
                                    </KDSText>
                                    <KDSText
                                        weight="bold"
                                        style={{
                                            textAlign: "center",
                                            color: "white",
                                            margin: KDSMargin.top_24
                                        }}>
                                        - Tasha B.
                                    </KDSText>
                                </div>
                            </KDSFlexLayout>
                        </KDSGridItem>
                    </KDSGridLayout>
                </KDSFlexItem>

                <KDSFlexItem style={{
                    position: "relative",
                    backgroundColor: "rgba(234, 162, 47, 1)",
                    padding: KDSPadding.vert_24,
                    width: "100%",
                }}>

                    <div style={{
                        position: "absolute",
                        overflow: "hidden",
                        height: "100%",
                        width: "100%",
                        zIndex: 1,
                    }}>
                        <div style={{
                            pointerEvents: "none",
                            backgroundImage: `url('${import.meta.env.BASE_URL}assets/home/circle_background.svg')`,
                            backgroundSize: "cover",
                            backgroundPosition: "0 0",
                            top: "0",
                            height: "95%",
                            display: "block",
                            width: "100%",
                        }} />
                    </div>
                    <KDSGridLayout
                        gridTemplateRows="repeat(auto-fit, 1fr)"
                        rowGap="24px"

                        style={{
                            width: "100%",
                        }}>
                        <KDSGridItem >
                            <KDSText size="xx-large" style={{
                                textAlign: "center",
                                lineHeight: "1.25em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                color: "white",
                                margin: KDSMargin.all_24
                            }}>Schedule an Appointment</KDSText>
                            <KDSText style={{
                                textAlign: "center",
                                lineHeight: "1.25em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                color: "white",
                                margin: KDSMargin.all_24
                            }}>We proudly serve the pets of the Pendleton, SC area. We look forward to seeing you and your pet. Request an appointment by clicking the button below.</KDSText>
                            <div style={{
                                display: "flex",
                                justifyContent: "center",
                                width: '100%'
                            }}>
                                <button style={{
                                    marginLeft: "auto",
                                    marginRight: "auto",
                                }}>Schedule an Appointment</button>
                            </div>
                        </KDSGridItem>
                        <KDSGridItem>
                            <KDSText size="x-large" style={{
                                textAlign: "center",
                                lineHeight: "1.25em",
                                wordWrap: "break-word",
                                whiteSpace: "normal",
                                overflow: undefined,
                                textOverflow: undefined,
                                color: "white",
                            }}>Areas We Serve</KDSText>
                            <KDSGridLayout
                                gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
                                <KDSGridItem>
                                    <KDSText
                                        size="large"
                                        style={{
                                            textAlign: "center",
                                            lineHeight: "1.5em",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            overflow: undefined,
                                            textOverflow: undefined,
                                            color: "white",
                                        }}>Easley<br />Seneca<br />Clemson<br />Anderson<br />Six Mile
                                        <br />Walhalla<br />Iva<br />Starr<br />Williamston
                                    </KDSText>
                                </KDSGridItem>
                                <KDSGridItem>
                                    <KDSText
                                        size="large"
                                        style={{
                                            textAlign: "center",
                                            lineHeight: "1.5em",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            overflow: undefined,
                                            textOverflow: undefined,
                                            color: "white",
                                        }}>Belton<br />Powdersville<br />Central<br />Homeland Park
                                        <br />Liberty<br />Pickens<br />Piedmont<br />Fair Play<br />Pendleton
                                    </KDSText>
                                </KDSGridItem>
                                <KDSGridItem>
                                    <KDSText
                                        size="large"
                                        style={{
                                            textAlign: "center",
                                            lineHeight: "1.5em",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            overflow: undefined,
                                            textOverflow: undefined,
                                            color: "white",
                                        }}>Townville<br />Westminster<br />Salem<br />Allendale<br />Oakway
                                        <br />North lake<br />Centerville<br />Norris<br />Avondale
                                    </KDSText>
                                </KDSGridItem>
                                <KDSGridItem>
                                    <KDSText
                                        size="large"
                                        style={{
                                            textAlign: "center",
                                            lineHeight: "1.5em",
                                            wordWrap: "break-word",
                                            whiteSpace: "normal",
                                            overflow: undefined,
                                            textOverflow: undefined,
                                            color: "white",
                                        }}>Salem<br />Fairview<br />Mountain Rest<br />Sunset<br />Abbeville
                                        <br />Due West<br />Donalds<br />Antreville<br />Lowndesville
                                    </KDSText>
                                </KDSGridItem>
                            </KDSGridLayout>
                        </KDSGridItem>
                    </KDSGridLayout>
                </KDSFlexItem>

                <KDSFlexItem>
                    <KDSGridLayout
                        gridTemplateColumns="repeat(auto-fit, minmax(300px, 1fr))">
                        <KDSGridItem style={{
                            padding: KDSPadding.vert_48_horiz_48,
                        }}>
                            <h2>Questions?</h2>
                            <KDSText>
                                Get in Touch! We look forward to hearing from you.
                            </KDSText>
                            <div>
                                <h2>
                                    <KDSText weight="bold" >
                                        PHONE
                                    </KDSText>
                                </h2>
                                <KDSText >
                                    <a style={{
                                        color: "rgba(99, 35, 37, 1)",
                                        textDecoration: "none"
                                    }} href="tel:864-337-3758">(864) 337-3758</a>
                                </KDSText>
                            </div>
                            <div>
                                <h2>
                                    <KDSText weight="bold" >
                                        EMAIL
                                    </KDSText>
                                </h2>
                                <KDSText >
                                    <a style={{
                                        color: "rgba(99, 35, 37, 1)",
                                        textDecoration: "none"
                                    }} href="mailto:countrycreaturesvet@gmail.com">countrycreaturesvet@gmail.com</a>
                                </KDSText>
                            </div>
                            <div>
                                <h2>
                                    <KDSText weight="bold" >
                                        HOURS
                                    </KDSText>
                                </h2>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                }}>
                                    <b>Mon: </b>8:00 AM - 4:00PM
                                </KDSText>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                }}>
                                    <b>Tue: </b>8:00 AM - 4:00PM
                                </KDSText>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                }}>
                                    <b>Wed: </b>Large Animal Emergencies Only
                                </KDSText>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                }}>
                                    <b>Thur: </b>8:00 AM - 4:00PM
                                </KDSText>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                }}>
                                    <b>Fri-Sun: </b>Large Animal Emergencies Only
                                </KDSText>
                            </div>
                            <div>
                                <KDSText style={{
                                    lineHeight: "1.25em",
                                    wordWrap: "break-word",
                                    whiteSpace: "normal",
                                    overflow: undefined,
                                    textOverflow: undefined,
                                    margin: KDSMargin.top_24
                                }}>
                                    We see all large animal emergencies for current clients 7 days a week until 10 pm and work in non-client emergencies as available during hours.
                                </KDSText>
                            </div>
                        </KDSGridItem>
                        <KDSGridItem>
                            <div style={{
                                backgroundColor: "rgb(237, 237, 237)",
                                margin: KDSMargin.all_48,
                                padding: KDSPadding.vert_48_horiz_48,
                                borderRadius: "24px",
                            }}>
                                <div>
                                    <label >Name <span>*</span>
                                    </label>
                                    <div>
                                        <div>
                                            <label >First</label><input style={{
                                                margin: KDSMargin.left_24,
                                                display: "inline-block",
                                                width: "50%",
                                            }} type="text" id="name-input" required={true} />
                                        </div>
                                        <div>
                                            <label>Last</label><input style={{
                                                margin: KDSMargin.left_24,
                                                display: "inline-block",
                                                width: "50%",
                                            }} type="text" id="last-input" required={true} />
                                        </div>
                                    </div>
                                </div>
                                <div><label>Email <span>*</span></label>
                                    <input style={{
                                        width: "100%"
                                    }} type="email" spellCheck={false} required={true} />
                                </div>
                                <div><label>Phone</label>
                                    <input style={{
                                        width: "100%"
                                    }} type="tel" data-inputmask="'mask': '(999) 999-9999'" data-rule-us-phone-field="true" data-inputmask-inputmode="tel" inputMode="tel" />
                                </div>
                                <div>
                                    <ul>
                                        <li>
                                            <input type="checkbox" value="By checking this box, you agree to receive text messages (SMS) from Country Creatures Veterinary Care related to animal care and appointments at the phone number provided above. You may reply STOP to opt-out at any time. For assistance, reply HELP. Message and data rates may apply. Message frequency will vary." />
                                            <label>By checking this box, you agree to receive text messages (SMS) from Country Creatures Veterinary Care related to animal care and appointments at the phone number provided above. You may reply STOP to opt-out at any time. For assistance, reply HELP. Message and data rates may apply. Message frequency will vary.</label>
                                        </li>
                                    </ul>
                                    <div >Learn more on our <a href="https://countrycreatures.vet/privacy-policy/">privacy policy</a> page.</div>
                                </div>
                                <div>
                                    <label >How can we help you? <span >*</span></label>
                                    <textarea style={{
                                        width: "100%",
                                    }} required={true} />
                                </div>
                                <div>
                                    <input type="hidden" />
                                </div>
                            </div>
                        </KDSGridItem>
                    </KDSGridLayout>
                </KDSFlexItem>
                <KDSFlexItem>
                    <div style={{
                        width: "100%"
                    }}>
                        <div>
                            <div>
                                <iframe loading="lazy" src="https://www.google.com/maps/d/embed?mid=1G3WbQCH0tpMQUnNCPvfX2O3b-XdqzEU&amp;ehbc=2E312F" width="100%" height="550"></iframe>
                            </div>
                        </div>
                    </div>
                </KDSFlexItem>
            </KDSFlexLayout>
        </KDSPage >
    );
}
