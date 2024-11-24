'use client'
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import Link from "next/link";

const Hero = ({ }) => {

    const scrollToBottom = () => {
        window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
    };
    return (
        <section id="hero" className="flex w-full items-center justify-center">
            <div className="relative flex min-h-[100vh] w-full items-center justify-center bg-black">
                <div className="absolute left-0 top-0 h-full w-full bg-black/50 z-10"></div>
                <div className="absolute left-0 top-0 h-full w-full overflow-hidden">
                    <video
                        className="min-h-full min-w-full object-cover"
                        style={{ objectPosition: "center" }}
                        src="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/fusion-clan-restaurant-video.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        poster="https://foodo-web-videos.s3.eu-west-2.amazonaws.com/fusion-clan-video-thumbnail.png"
                    ></video>
                </div>
                <div className="z-40 flex flex-col gap-9 h-full w-full max-w-[1300px] items-center justify-center">
                    <div className="flex w-fit flex-col items-center justify-center gap-2">
                        <h1 className="font-gotu text-[#fff4e3] text-5xl  lg:leading-[80px] sm:text-5xl md:text-8xl text-center md:tracking-[-5.12px]">
                            Welcome to<br />
                            Fusion Clan restaurant
                            <br />
                        </h1>
                        <p className="font-poppins text-white text-center text-sm uppercase tracking-[4.4px]">Asian Essence, European Elegance</p>
                    </div>
                    <Link href='/menu'>
                        <Button className="flex items-center justify-center gap-3 px-10 py-7">View Menu</Button>
                    </Link>
                </div>
                <div className="absolute bottom-20 z-40" onClick={scrollToBottom}>
                    <Button className="flex items-center justify-center px-1 bg-transparent rounded-full text-white  hover:text-black" variant='outline'><ArrowDown className="font-extralight" /></Button>
                </div>
            </div>
        </section >
    );
};

export default Hero;
