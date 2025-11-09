import { Typewriter } from "react-simple-typewriter";

type Props = {
    data: {
        intro: string;
        roles: string[];
        titlePrefix: string;
        titleSuffix: string;
        ctaText: string;
        cvUrl: string;
        photo: string;
    };
};

export default function Hero({ data }: Props) {
    return (
        <section id="home" className="relative isolate bg-[#EEEFD5] pt-6 sm:pt-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-6 items-center min-h-[72vh]">
                {/* Left: image (reduced sizes) */}
                <div className="order-2 md:order-1 flex justify-center md:justify-start">
                    <img
                        src={data.photo}
                        alt="Profile"
                        loading="eager"
                        className="w-44 sm:w-64 md:w-[340px] object-cover rounded-[2rem]"
                    />
                </div>

                {/* Right: text */}
                <div className="order-1 md:order-2">
                    <p className="text-ink-700/80 mb-4">{data.intro}</p>

                    <h1 className="text-ink-900 text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight">
                        {data.titlePrefix}{" "}
                        <span className="relative">
                            <span className="px-2">
                                <Typewriter
                                    words={data.roles}
                                    loop={0}
                                    cursor
                                    cursorStyle="|"
                                    typeSpeed={200}
                                    deleteSpeed={50}
                                    delaySpeed={1500}
                                />
                            </span>
                            <span className="text-ink-900"> {data.titleSuffix}</span>
                        </span>
                    </h1>

                    {/* Faded white link (like the mock) */}
                    <a
                        href={data.cvUrl}
                        className="inline-block mt-8 items-center px-4 py-2 rounded-xl bg-teal-500 text-white font-semibold hover:bg-teal-600"
                    >
                        {data.ctaText}
                    </a>
                </div>
            </div>

            {/* subtle dotted shape (lighter to blend with the beige) */}
            {/* Curved bottom shape (matches Selfown) */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
                <svg
                    className="relative block w-[calc(100%+1.3px)] h-[80px]"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1200 120"
                    preserveAspectRatio="none"
                >
                    <path
                        d="M321.39,56.44C180.75,72.11,0,120,0,120H1200V0S931.79,43.4,777.5,58.64C623.21,73.88,462,40.77,321.39,56.44Z"
                        className="fill-white"
                    ></path>
                </svg>
            </div>
        </section>
    );
}
