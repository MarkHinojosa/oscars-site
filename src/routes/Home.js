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
                    borderColor: "red",
                    borderWidth: 5,
                    height: 10,
                    width: 10,
                }}
            >
                <text
                    style={{
                        alignContent: "center",
                        justifyContent: "center",
                        alignItems: "center",
                        textAlign: "center",
                        color: "green",
                    }}
                >
                    Homes
                </text>
            </div>
        </div>
    );
}
