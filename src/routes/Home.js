export default function Home() {
    return (
        <div
            style={{
                backgroundColor: "#071F4E",
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
                    height: "30%",
                    width: "100%",
                    backgroundColor: "green",
                    flex: 1,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                    // alignContent: "center",
                    // flexFlow: "column",
                }}
            >
                <div
                    style={{
                        backgroundColor: "red",
                        width: "30%",
                        height: "100%",
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
                    <h2
                        style={{
                            textAlign: "center",
                            fontSize: 28,
                            fontWeight: "bold",
                            fontFamily: "fantasy",
                        }}
                    >
                        HHIT
                    </h2>
                </div>
                <text style={{ fontFamily: "cursive", fontSize: 22 }}>
                    Hispanic Healthcare Initiative of Texas
                </text>
            </div>
        </div>
    );
}
