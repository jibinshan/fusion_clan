import Image from "next/image";

const BavetteStory = ({ }) => {
  return (
    <section className="relative flex h-full w-full items-center justify-center lg:py-16 p-4">
      <div className="flex h-full w-full flex-col items-center justify-center gap-11 bg-[#050505]">
        <h2 className="font-oswald text-8xl text-[#262626] md:left-[15%] md:text-8xl text-center">
          The Fusion Clan<br />
          Story
        </h2>
        <div className="flex h-full w-full flex-col items-center justify-center gap-4 bg-[#050505] md:flex-row lg:px-24 lg:py-20">
          <div className="h-full w-full overflow-hidden p-4 md:w-1/2 md:p-0">
            <Image
              src="/images/about-us/story.png"
              width={577}
              height={676}
              alt="private dining"
              className="h-auto w-full rounded-lg md:rounded-none"
            />
          </div>
          <div className="flex h-full w-full flex-col items-center gap-[2.5rem] p-6 md:w-1/2 md:items-start lg:ml-24">
            <h1 className="max-w-[500px] text-center font-oswald text-6xl sm:text-7xl md:text-start">
              From Dream<br />
              to Sizzle
            </h1>
            <p className="max-w-[450px] text-center font-light leading-[160%] text-[#C1B6A6] md:text-start">
              Transforming culinary dreams into reality starts with a passion for flavor and a commitment to quality. Every dish begins as an idea, crafted with care and perfected through innovation. At the heart of this journey is the desire to bring people together over unforgettable meals.
              <br />
              <br />
              From the first spark of inspiration to the final sizzle in the pan, each step celebrates creativity and tradition. Every ingredient tells a story, coming together to create moments worth savoring. It`s more than food—it`s an experience that lingers beyond the plate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BavetteStory;
