import Masonry from "../Elements/Masonry";
const items = [
// import items from "../gallery/items.json"
  {
    "id": 1,
    "img": "https://picsum.photos/id/143/200/300",
    "url": "",
    "height": 300
  },
  {
    "id": 2,
    "img": "https://picsum.photos/id/129/200/300",
    "url": "",
    "height": 200
  },
  {
    "id": 3,
    "img": "https://picsum.photos/id/164/200/300",
    "url": "",
    "height": 500
  }
];

function Gallery() {
  return (
    <>
      {/* <Masonry
        items={items}
        ease="power3.out"
        duration={0.6}
        stagger={0.05}
        animateFrom="bottom"
        scaleOnHover={true}
        hoverScale={0.95}
        blurToFocus={true}
        colorShiftOnHover={false}
      />     */}
    </>
  );
}
export default Gallery;
