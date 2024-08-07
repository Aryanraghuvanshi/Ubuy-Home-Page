
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Img {
  images: {
    logo: string;
    text: string;
    src: string;
}[]
}

const Carousel = ({ images } : Img) => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 200,
    autoplaySpeed: 3000,
    cssEase: "ease",
    pauseOnHover: false
  };

 
  return (
    <div >
      
          <Slider {...settings}>
         {images.map((val,i)=>(
        <div key={i} className=' relative'>
         <div className=" w-full h-full ">
       <img
          
          src={val.src}
          alt={val.text}
          className={`-z-10 rounded-xl  h-48 sm:h-80 sm:object-none transition-opacity duration-1000 `}
        />
    </div>
      <div className=' w-80 h-40 flex flex-col items-center justify-center absolute top-12 right-1 sm:right-[30%] '>
        <figure className='mb-5'>
          <img src={val.logo} alt=""  className=' w-16 h-16 sm:h-full sm:w-full object-contain sm:object-none'/>
        </figure>
        <p className=' text-wrap text-white text-lg font-bold sm:font-normal sm:text-xl'>{val.text}</p>
        <button className='px-7 py-2 mt-6 bg-white text-sm hover:bg-yellow-500 '>
        <svg className='h-4 w-4 inline-block mr-2' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M160 112c0-35.3 28.7-64 64-64s64 28.7 64 64l0 48-128 0 0-48zm-48 48l-64 0c-26.5 0-48 21.5-48 48L0 416c0 53 43 96 96 96l256 0c53 0 96-43 96-96l0-208c0-26.5-21.5-48-48-48l-64 0 0-48C336 50.1 285.9 0 224 0S112 50.1 112 112l0 48zm24 48a24 24 0 1 1 0 48 24 24 0 1 1 0-48zm152 24a24 24 0 1 1 48 0 24 24 0 1 1 -48 0z"/></svg>
          See Collection
          </button>
      </div>
        </div>
      ))
      }
      </Slider> 
    

    </div>
  );
};

export default Carousel;
