import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const Welcome = ({ }) => {
  return (
    <section
      id="welcome"
      className="flex w-full items-center justify-center bg-[#131313] lg:h-screen"
    >
      <div className="relative flex h-fit w-full flex-col items-center justify-center gap-9 overflow-hidden px-3 py-12 lg:min-h-[100vh] lg:flex-row lg:gap-0 lg:p-0 lg:py-24">
        <div className="lg:left-[450px] lg:top-5/12 flex h-fit w-fit items-center justify-center overflow-hidden lg:absolute">
          <Image
            src="/images/welcome/center.png"
            width={450}
            height={722}
            alt="center"
            className="h-[550px] w-[350px]"
          />
        </div>
        <div className="z-40 flex h-full w-full max-w-[1300px] flex-col items-center justify-center gap-5 lg:flex-row lg:items-start lg:gap-9">
          <div className="flex w-full flex-col items-start justify-start gap-10 lg:w-1/3">
            <p className="w-full text-center font-gotu text-2xl text-[#727272] lg:text-lg">
              Welcome
            </p>
            <div className="flex w-full justify-center lg:justify-end">
              <p className="font-gotu text-5xl lg:text-7xl">
                <span className="text-[#C1C1C1]">Asian &</span>
                <br />
                <span className="text-[#FEC679]">European</span>
                <br />
                <span className="w-full pl-28 text-end text-[#C1C1C1]">
                  Flavours
                </span>
              </p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center lg:w-1/2 lg:items-end">
            <div className="flex flex-col gap-5">
              <Image
                src="/images/logo.png"
                width={118}
                height={118}
                alt="center"
                className="w-24"
              />
              <p className="text-[#FEC679]">About Us</p>
              <p className="w-[320px] text-[#BBB4AA]">
                Fusion Clan blends Asian and European culinary traditions, offering innovative dishes crafted by Chef Joshiy. Located in Warwick, London, our restaurant invites you to experience a warm ambiance, exceptional service, and a journey of unforgettable flavors.
              </p>
              <Button
                className="flex items-center justify-center gap-3 px-10 py-7"
                asChild
              >
                <Link href="/table-booking">Table Booking</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
