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
          speed={0.5}
          squareSize={75}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#fff"
          hoverFillColor="#fff"
        />
        <Auth className="absolute" />
      </div>

       
    </>
  );
}
export default Screen;
