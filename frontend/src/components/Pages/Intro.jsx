import TextPressure from "../Elements/TextPressure";
import TrueFocus from "../Elements/TrueFocus";
import SpotlightCard from "../Elements/SpotlightCard";
import AuthFooter from "../Elements/AuthFooter";
import Navbar from "../Elements/Navbar";

function Intro() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen px-4">
        {/* DezNov with text-pressure */}
        <div className="relative h-60 sm:h-[700px] mb-8 sm:mb-24">
          <TextPressure
            text="DEZNOV"
            flex={false}
            alpha={true}
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
            DezNov is an exclusive space for UI/UX designers and digital artists
            to share stunning work, get inspired, and connect through creative
            feedback.
          </p>
          <p className="text-2xl/[1.5] tracking-widest w-full max-w-[750px]">
            DezNov is more than just a gallery — it's a focused space for UI/UX
            designers and digital artists to showcase their work and grow
            through authentic feedback. Whether you’re sharing polished shots or
            early concepts, DezNov helps you stay inspired through a curated
            feed of high-quality designs. Real-time comments, organized
            collections, and simple, OAuth-powered signups make it easy to join,
            connect, and build your creative presence. Designed for creators who
            value quality over clout.
          </p>
        </div>
      </div>

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
              Easily share your UI/UX designs and digital artwork with a smooth
              upload flow powered by Cloudinary, ensuring fast and optimized
              image delivery right from the start.
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
              Sign in with ease using OAuth, including GitHub authentication,
              giving each user a unique space to showcase their uploads and
              connect with others in the community.{" "}
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
              delivering fresh content on every visit.{" "}
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
              the conversation flowing.{" "}
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
              Designs can be saved and organized into personal collections — all
              managed securely in your MongoDB database, so users can access
              their favorites anytime.{" "}
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
      <AuthFooter />
    </>
  );
}
export default Intro;
