import SimpleImageSlider from "react-simple-image-slider";


const images = [
  { url: "'https://images.pexels.com/photos/64613/pexels-photo-64613.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'" },
  { url: 'https://images.pexels.com/photos/3737623/pexels-photo-3737623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
  {url: 'https://images.pexels.com/photos/9705830/pexels-photo-9705830.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'},
  { url: 'https://images.pexels.com/photos/9811233/pexels-photo-9811233.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
//   { url: "images/5.jpg" },
//   { url: "images/6.jpg" },
//   { url: "images/7.jpg" },
];

const Slider = () => {
  return (
    <div className="image">
      <SimpleImageSlider
        width={"100%"}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
      />
    </div>
  )
}

export default Slider;

