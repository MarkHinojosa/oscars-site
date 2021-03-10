import logo from "../assets/medEscort.png";
import clip from "../assets/droneFootage.mp4";
import { useState, useEffect } from "react";

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
        width,
        height,
    };
}

function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
        getWindowDimensions()
    );

    useEffect(() => {
        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowDimensions;
}

export default function Home() {
    const { height, width } = useWindowDimensions();

    return (
        <div
            style={{
                backgroundColor: "white",
                color: "white",
                height: "100%",
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div
                style={{
                    height: "20%",
                    width: "100%",
                    backgroundColor: "#071F4E",
                    flex: 1,
                    display: "flex",
                    // justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    // alignContent: "center",
                    // flexFlow: "column",
                }}
            >
                <div
                    style={{
                        // backgroundColor: "red",
                        width: "50%",
                        // height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* <div
                        style={{
                            backgroundColor: "purple",
                            height: 10,
                            width: 10,
                        }}
                    ></div> */}
                    <img style={{ height: "100%", width: "100%" }} src={logo} />
                </div>
                <text style={{ fontFamily: "cursive", fontSize: 20 }}>
                    Hispanic Healthcare Initiative of Texas
                </text>
            </div>
            <div>
                <video
                    id="video"
                    // className="videoTag"
                    autoPlay
                    loop
                    muted
                    // style={{
                    //     backgroundColor: "red",
                    //     height: "100%",
                    //     width: "100%",
                    // }}
                >
                    <source
                        // className="videoTag"
                        // style={{ height: { height } - "500px" }}
                        src={clip}
                        type="video/mp4"
                    ></source>
                </video>
                {/* <div id="leftSection"></div> */}
            </div>
            <div
                style={{
                    width: "100%",
                    backgroundColor: "yellow",
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <text style={{ color: "green" }}>Footer</text>
            </div>
        </div>
    );
}
