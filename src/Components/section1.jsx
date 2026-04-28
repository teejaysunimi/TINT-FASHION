import odn from '../assets/images/odn.jpg'
import rrr from '../assets/images/rrr.jpg'
import OOM from '../assets/images/OOM.jpg'
export const Section = () => {
  return (
    <div className="bg-black block text-center pt-4 text-white">
      <h2 className="text-4xl font-bold pb-5">OUR LIMITED COLLECTIONS</h2>
      <div className="flex justify-center items-start p-4 gap-5">
        <div className="w-[40%] ">
          <img className="" src={odn} alt="odn" />
        </div>
        <div className="w-[40%] relative inline-block">
          <img className="" src={rrr} alt="rrr" />
          <div className="absolute bottom-60 left-34 max-w">
            <a href="">
              <p className='border-2 text-2xl pl-4 pr-4 hover:bg-black'>SHOP ALL</p>
            </a>
          </div>
        </div>
        <div className="w-[40%]">
          <img className="" src={OOM} alt="OOOM" />
        </div>
      </div>
    </div>
  );
}

export default Section;