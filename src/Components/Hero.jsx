import p1 from "../assets/images/p1.jpg"
 const Hero = () => {
  return (
    <div className=" bg-black flex flex-col justify-center overflow-hidden pt-10 pl-20">
      <img className="w-180 ml-60" src={p1} alt="main" />    
      <h1 className="text-white left-30 pt-120 text-left text-4xl font-extrabold absolute">
        SHOP OUR NEWEST COLLECTIONS</h1>
      <div className="flex gap-3.5">
        <button className="text-white pb-40  ">SHOP NOW </button>
        <button className="text-white pb-45 "> EXPLORE</button>
      </div>
  
    </div>
  );
}

export default Hero;