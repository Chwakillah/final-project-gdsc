import HeroImage from '../assets/img/hero/hero-big-img.png'
import Sparkle from '../assets/img/hero/Sparkle.png'
import CirclePurple from '../assets/img/hero/circle-purple.png'
import CircleOrange from '../assets/img/hero/circle-orange.png'

function HeroSection() {
  return (
    <div>
      <header className="w-full min-h-screen px-8 md:px-20 flex flex-col lg:flex-row justify-center gap-4 relative items-center md:mt-8">
        <div className='flex flex-col gap-8 lg:gap-12 lg:flex-row'>
          <img src={Sparkle} alt="vektor" className='absolute top-24 lg:top-52 md:left-7 lg:left-20 md:size-6 lg:size-8 size-4 left-2'/>
          <img src={CirclePurple} alt="vektor" className='absolute top-[70px] left-1/2 size-2 lg:size-3 lg:top-44 lg:left-1/4'/>
          <img src={CircleOrange} alt="vektor" className='absolute top-16 md:top-24 size-3 left-3/4'/>
          
          <div className='flex flex-col gap-8 md:gap-4 lg:w-1/2'>
            <div className='flex flex-col gap-2 justify-center w-full'>
              <h4 className='text-hijau-500 text-xs md:text-base font-medium lg:text-xl'>RAIH IMPIAN MASUK PERGURUAN TINGGI NEGERI</h4>
              <h1 className='text-hijau-800 text-2xl md:text-3xl lg:text-5xl font-semibold'>
                Percayakan <span className='text-hijau-600'>Persiapanmu</span> <br /> Masuk <span className='text-hijau-600'>PTN </span> 
                bersama <br /> <span className='text-hijau-600'>Les</span> <span className='text-oren-500'>Tasya</span>
              </h1>
              <p className='text-xs md:text-base lg:text-lg text-secondary-abu font-medium'>
                Belajar Bareng Master Teacher dan teman ambis di seluruh
                Indonesia!
              </p>
            </div>
            <div>
              <label className="input  flex items-center gap-2 shadow-md z-0">
                <input type="text" className="grow text-xs md:text-sm lg:text-base" placeholder="Mau Belajar Apa?" />
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
          <div className='lg:w-1/2'>
            <img src={HeroImage} alt="hero" className='w-full object-cover'/>
          </div>
        </div>
      </header>
      <div className="w-full min-h-screen"></div>
    </div>
  )
}

export default HeroSection
