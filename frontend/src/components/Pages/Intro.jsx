import TextPressure from "../Elements/TextPressure";
import TrueFocus from "../Elements/TrueFocus";
import SpotlightCard from "../Elements/SpotlightCard";
import AuthFooter from "../Elements/AuthFooter";
import AuthNavbar from "../Elements/AuthNavbar";
import AuthIcons from "../Elements/AuthIcons";

function Intro() {
  return (
    <>
    <div>
      <nav className="flex bg-[rgba(8,9,12,0.1)] h-16 w-full sticky top-0 z-10">
      <div className="w-full px-4 sm:px-20 py-[3px] bg-zinc-950/10 backdrop-blur-[5px] flex justify-center sm:justify-between items-center overflow-hidden">
        <div className="text-white text-2xl sm:text-4xl font-bold font-['Poppins'] text-center w-full sm:w-auto">
          DezNov
        </div>
        <div className="hidden sm:flex">
          <AuthIcons />
        </div>
      </div>
    </nav>
    {/* Paragraphs */}
      <div className="min-h-screen px-4">
        {/* DezNov with text-pressure */}
        <div className="relative h-60 sm:h-[700px] mb-8 sm:mb-2 select-none cursor-crosshair">
          <TextPressure
            text="DEZNOV"
            flex={false}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={36}
          />
        </div>
        {/* Para */}
        <div className="text-white text-left flex justify-center flex-col items-center gap-16 mb-24">
          <p className="text-2xl/[1.5] tracking-widest w-full max-w-[750px]">
            DezNov is a chill space where designers and developers — from beginners to pros — can share what they’re working on. 
            Whether it’s a clean UI, a design concept, or a coding project you’re proud of, this is the place to put it out there.
          </p>
          <p className="text-2xl/[1.5] tracking-widest w-full max-w-[750px]">
            Add captions, share your thought process, and get real feedback from other creators. You can comment on work, save 
            stuff you love, and even follow people who inspire you. No pressure, no noise — just a creative feed 
            full of cool projects and ideas.
          </p>
          <p className="text-2xl/[1.5] tracking-widest w-full max-w-[750px]">
           - One place for your ideas, in progress or polished
          </p>
        </div>
      </div>
    {/* Features */}
      <div className="relative min-h-screen flex items-center justify-center text-white px-4">
        {/* <h1 className="absolute top-0 text-7xl font-bold text-center text-white">
          Features
        </h1> */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16 w-full max-w-7xl">
          <SpotlightCard
            className="custom-spotlight-card cursor-crosshair"
            spotlightColor="rgba(0, 229, 255, 0.3)"
          >
            <h1 className="text-2xl font-bold mb-8 text-center">
              Upload Your Work
            </h1>
            <p className="text-xl/[1.5] tracking-wider text-center w-full max-w-[300px] mx-auto">
              Effortlessly share everything you create — from coding projects and web apps to UI designs and digital art. With a fast, optimized 
              upload flow powered by Cloudinary, your work looks sharp and loads quick, every time
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cursor-crosshair"
            spotlightColor="rgba(255, 51, 153, 0.3)"
          >
            <h1 className="text-2xl font-bold mb-8 text-center">
              Seamless Profile Setup
            </h1>
            <p className="text-xl/[1.5] tracking-wider text-center w-full max-w-[300px] mx-auto">
              Sign up easily using your NITH college email to unlock your personal space on DezNov. 
              Every profile lets you showcase your uploads and connect with other creators within the campus community{" "}
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cursor-crosshair"
            spotlightColor="rgba(255, 230, 0, 0.3)"
          >
            <h1 className="text-2xl font-bold mb-8 text-center">
              Discover Inspiration
            </h1>
            <p className="text-xl/[1.5] tracking-wider text-center w-full max-w-[300px] mx-auto">
              Users can explore a dynamic, ever-growing feed of creative work,
              served through a robust backend built with MongoDB and Express,
              delivering fresh content on every visit{" "}
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cursor-crosshair"
            spotlightColor="rgba(0, 204, 102, 0.3)"
          >
            <h1 className="text-2xl font-bold mb-8 text-center">
              Get Feedback in Real-Time
            </h1>
            <p className="text-xl/[1.5] tracking-wider text-center w-full max-w-[300px] mx-auto">
              Engagement feels instant with real-time comments and likes,
              powered by Socket.io and synced with your MongoDB database to keep
              the conversation flowing{" "}
            </p>
          </SpotlightCard>
          <SpotlightCard
            className="custom-spotlight-card cursor-crosshair"
            spotlightColor="rgba(153, 51, 255, 0.3)"
          >
            <h1 className="text-2xl font-bold mb-8 text-center">
              Save Your Favorites
            </h1>
            <p className="text-xl/[1.5] tracking-wider text-center w-full max-w-[300px] mx-auto">
              Found something that clicks? Save it. Whether it’s a slick UI, a cool side project, 
              or a piece of art — drop it into your personal collection and come back to it anytime
              {" "}
            </p>
          </SpotlightCard>
        </div>
      </div>

      <TrueFocus
        sentence="Discover Share Inspire"
        manualMode={false}
        blurAmount={5}
        borderColor="green"
        animationDuration={2}
        pauseBetweenAnimations={1}
      />
      </div>
      <AuthFooter />
    </>
  );
}
export default Intro;
