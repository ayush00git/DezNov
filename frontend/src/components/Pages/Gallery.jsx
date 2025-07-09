import Masonry from "../Elements/Masonry";
import items from "../gallery/items.json"

function Gallery() {
  return (
    <>
      <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />
    </>
  );
}
export default Gallery;
