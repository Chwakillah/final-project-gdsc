import HeroImage from '../assets/img/hero/hero-big-img.png'
import Sparkle from '../assets/img/hero/Sparkle.png'
import CirclePurple from '../assets/img/hero/circle-purple.png'
import CircleOrange from '../assets/img/hero/circle-orange.png'
import VectorPersiapan from '../assets/img/hero/vector-persiapan.png'
import VectorPTN from '../assets/img/hero/vector-ptn.png'

const Beranda = () => {
  return (
    <div>
      <header className="w-full min-h-screen px-8 md:px-20 flex flex-col justify-center gap-4 relative">
        <div className='flex flex-col gap-8 md:gap-8'>
          <img src={Sparkle} alt="vektor" className='absolute top-24 md:left-7 md:size-6 size-4 left-2'/>
          <img src={CirclePurple} alt="vektor" className='absolute top-[90px] left-1/2 size-2'/>
          <img src={CircleOrange} alt="vektor" className='absolute top-16 md:top-24 size-3 left-3/4'/>
          <img src={VectorPersiapan} alt="vektor" className='absolute top-[152px] md:top-[168px] md:left-72 left-40'/>
          <img src={VectorPTN} alt="vektor" className='absolute top-[184px] md:top-[202px] md:left-[172px] left-24'/>
          <div className='flex flex-col  gap-8 md:gap-4'>
            <div className='flex flex-col gap-2 justify-center'>
              <h4 className='text-hijau-500 text-xs md:text-base font-medium'>RAIH IMPIAN MASUK PERGURUAN TINGGI NEGERI</h4>
              <h1 className='text-hijau-800 text-2xl md:text-3xl font-semibold'>
                Percayakan <span className='text-hijau-600'>Persiapanmu</span> Masuk <span className='text-hijau-600'>PTN </span> 
                bersama <span className='text-hijau-600'>Les</span> <span className='text-oren-500'>Tasya</span>
              </h1>
              <p className='text-xs md:text-base text-secondary-abu font-medium'>
                Belajar Bareng Master Teacher dan teman ambis di seluruh
                Indonesia!
              </p>
            </div>
            <div>
              <label className="input  flex items-center gap-2 shadow-md z-0">
                <input type="text" className="grow text-xs md:text-sm" placeholder="Mau Belajar Apa?" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="h-4 w-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
            </div>
          </div>
          <div>
            <img src={HeroImage} alt="hero" className='w-full object-cover'/>
          </div>
        </div>
      </header>
      <div className="w-full min-h-screen"></div>
    </div>
  );
};

export default Beranda;
