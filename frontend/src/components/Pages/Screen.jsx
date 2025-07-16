import Auth from "../Elements/Auth";
import LetterGlitch from "../Elements/LetterGlitch";
import Squares from "../Elements/Squares";


function Screen() {
  return (
    <>

      {/* <div className="relative min-h-screen flex items-center justify-center bg-[#0D0E12]">
        
        <LetterGlitch
          glitchSpeed={10}
          centerVignette={false}
          outerVignette={false}
          smooth={true}
        />
        <div className="absolute flex">
          <Auth />
        </div>
      </div> */}
      

      <div className="bg-[#] flex flex-wrap justify-center items-center">
        <Squares
          speed={0.25}
          squareSize={75}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#fff"
        />
        <Auth className="absolute" />
        <div className="absolute flex justify-center items-center bottom-4 h-16 w-16 rounded-full border-2 border-white">
              <svg width="25" height="25" viewBox="0 0 64 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M32 4V74" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M60 48L32 76L4 48" stroke="white" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>

        </div>
      </div>

       
    </>
  );
}
export default Screen;
