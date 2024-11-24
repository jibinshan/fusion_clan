import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

const Map = ({ }) => {
    return (
        <section id="welcome" className="flex w-full items-center justify-center bg-[#0b0b0b] overflow-hidden">
            <div className="relative flex flex-col gap-4 h-fit lg:min-h-[60vh]  w-full max-w-[1300px] items-center justify-center px-4 lg:px-0 py-12 lg:py-24">
                <div className="w-full flex">
                    {/* <Image
                        src="/images/home/map/map.png"
                        width={1462}
                        height={597}
                        alt="map"
                    />
                    <Button className="hidden absolute rounded-full lg:flex flex-col h-fit lg:top-1/3 lg:left-1/2 px-2 py-2 lg:px-7 lg:py-7"><span>Get<br />Direction<br /></span> <ArrowUpRight /></Button> */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2440.8339280571467!2d-1.5839882999999901!3d52.28271689999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4870cb86d5594ebd%3A0x948b107de9df61aa!2sFusion%20Clan%20Warwick!5e0!3m2!1sen!2sin!4v1731152495173!5m2!1sen!2sin"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="w-full h-[500px] invert grayscale"
                    ></iframe>
                </div>
                <div className="flex w-full flex-col items-start lg:flex-row lg:justify-between gap-6 px-3 lg:px-0">
                    <div className="flex gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <MapPin className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href='https://maps.app.goo.gl/gQSwjUHsQ5wqZe8d6' target="_blank">
                                Fusion Clan<br />
                                15 Smith Street, Warwick, CV34 4JA
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <Phone className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href='tel: 01926962618'>
                                <p> 01926962618</p>
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div>
                            <div className="h-fit w-fit rounded-full bg-[#0f0f0f] p-2">
                                <Mail className="text-[#b7955b]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <Link href='mailto:info@fusionclanwarwick.co.uk'>
                                <p>info@fusionclanwarwick.co.uk</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Map;