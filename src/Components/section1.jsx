import odn from '../assets/images/odn.jpg'
import rrr from '../assets/images/rrr.jpg'
import OOM from '../assets/images/OOM.jpg'
export const Section = () => {
  return (
    <div className="bg-black block  text-white">
      <h2 className="justify-items-center pt-5 pl- ">OUR LIMITED COLLECTIONS</h2>
      <div className="flex">
        <div className="max-w-max relative">
          <img className='w-[40%] ' src={odn} alt="" />
        </div>
        <div className="">
          <img className='w-[40%]' src={rrr} alt="" />
        </div>
        <div className="">
          <img className='w-[40%]' src={OOM} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Section;