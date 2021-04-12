import logo from "../assets/medEscort.png";
import clip from "../assets/droneFootage.mp4";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    const handleSocialWorkerClick = () => {
        console.log("clicked handle social worker ***");
    };

    const handleHospitalClick = () => {
        console.log("clicked hospital ***");
        return <Link to="/users" />;
    };

    return (
        <div
            style={{
                backgroundColor: "white",
                color: "white",
                height: "100vh",
                flex: 1,
                alignContent: "center",
                justifyContent: "center",
                flexDirection: "column",
            }}
        >
            <div id="header">
                <div
                    style={{
                        height: "20vh",
                        width: "100%",
                        backgroundColor: "#071F4E",
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    <div
                        style={{
                            width: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            style={{ height: "100%", width: "100%" }}
                            src={logo}
                        />
                    </div>
                    <text style={{ fontFamily: "cursive", fontSize: 20 }}>
                        Hispanic Healthcare Initiative of Texas
                    </text>
                </div>
            </div>
            <div id="middle" style={{ height: "60%" }}>
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
                </div>
                <div id="leftSectionBackground"> </div>
                <div id="leftTextContainer">
                    <text style={{ fontSize: 25, fontStyle: "italic" }}>
                        I am a
                    </text>
                    <text style={{ fontSize: 35 }}>Social Worker</text>
                    <text style={{ fontSize: 35 }}>of Family Member</text>
                    <text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                            margin: "5%",
                            maxWidth: 420,
                        }}
                    >
                        Looking for Logistical Solutions for Patient Transfers
                    </text>
                    <Link to="/users">
                        <button
                            className="buttonComponent"
                            onClick={handleSocialWorkerClick}
                        >
                            Enter Here
                        </button>
                    </Link>
                </div>
                <div id="rightSectionBackground"></div>
                <div id="rightTextContainer">
                    <text style={{ fontSize: 25, fontStyle: "italic" }}>
                        I am a
                    </text>
                    <text style={{ fontSize: 35 }}>Hospital</text>
                    <text style={{ fontSize: 35 }}>CEO or CFO</text>
                    <text
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            textAlign: "center",
                            margin: "5%",
                            maxWidth: 420,
                        }}
                    >
                        Looking to Solve the Problem of Unfunded Foreign
                        Patients in American Hospitals
                    </text>
                    <Link to="/about">
                        <button
                            className="buttonComponent"
                            onClick={handleHospitalClick}
                        >
                            Enter Here
                        </button>
                    </Link>
                </div>
            </div>
            <div
                id="footer"
                style={{
                    height: "20%",
                    width: "100%",
                    backgroundColor: "#071F4E",
                    flex: 2,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    alignContent: "center",
                    // flexFlow: "column",
                }}
            >
                <div
                    style={{
                        // height: "20%",
                        width: "100%",
                        backgroundColor: "#071F4E",
                        flex: 1,
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                        alignItems: "center",
                        alignContent: "center",
                        flexFlow: "column",
                        zIndex: 902,
                        // overflow: "auto",
                    }}
                >
                    <h4 style={{ color: "white", padding: 0, margin: 0 }}>
                        Alliviating Healthcare Disparities Together
                    </h4>
                    <text style={{ color: "white", textAlign: "center" }}>
                        An effective consultation is a vital part of engaging
                        with individuals, organizations, and communities in
                        healthcare system navigation process with the aim of
                        improving healthcare standards for all stakeholders.
                    </text>
                </div>
            </div>
        </div>
    );
}
