import React from "react";

export default function Logo({ rotate = true }) {
    return (
        <div className={`relative h-64 w-64 ${rotate ? "" : "hover:animate-[shake_300ms_ease]"}`}>
            {/* Background */}
            <div
                className={`relative m-auto h-full w-full rounded-full transition-transform duration-1000 ease-in-out ${
                    rotate ? "hover:rotate-[360deg]" : ""
                }`}
                style={{
                    boxShadow: "inset 0 0 0 0.8em white, 0 0 10px 1px black",
                    background: `linear-gradient(60deg, black 63.78%, transparent 63.78%),
                        linear-gradient(-60deg, black 63.78%, transparent 63.78%) 100% 0,
                        linear-gradient(60deg, transparent 36.22%, white 36.22%) 100% 100%,
                        linear-gradient(-60deg, transparent 36.22%, white 36.22%) 0% 100%,
                        white linear-gradient(black, black) 50% 100%`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "50% 50%",
                }}
            >
                <div className="absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black"></div>
            </div>

            {/* Triangle */}
            <div
                className="pointer-events-none absolute top-0 left-0 z-10 h-full w-full rounded-full"
                style={{
                    background: "linear-gradient(-60deg, black 63.78%, transparent 63.78%) 100% 0",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "50% 50%",
                }}
            >
                <div
                    className="absolute h-full w-full rounded-full"
                    style={{
                        background: "linear-gradient(-60deg, black 63.78%, transparent 63.78%) 100% 20%",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "50% 50%",
                    }}
                ></div>
            </div>

            {/* Strip */}
            <div className="pointer-events-none absolute top-1/2 left-1/2 z-10 flex h-[1.8rem] w-1/2 -translate-y-1/2">
                <div
                    className="bg-primary h-full w-full"
                    style={{
                        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 100%, 30% 0%)",
                    }}
                />
                <div className="bg-primary absolute h-full w-1/2 translate-x-1/2" />
                <div
                    className="bg-primary h-full w-full"
                    style={{
                        clipPath: "ellipse(50% 200% at 50% 50%)",
                    }}
                />
            </div>
        </div>
    );
}
