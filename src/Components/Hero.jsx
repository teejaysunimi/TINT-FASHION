import p1 from "../assets/images/p1.jpg"
 const Hero = () => {
  return (
    <section className="bg-black flex flex-col justify-center overflow-hidden relative pt-10 pl-20">
      <div className="mx-auto">
        <img className="w-[80%] h-auto  mx-auto" src={p1} alt="main" />
      </div>
      {/*Text Overlay*/}
      <div className="absolute bottom-[18%] left-[12%] align-left text-white">
        <h1 className=" text-white text-[2rem] font-bold">
          SHOP OUR NEWEST COLLECTIONS
        </h1>
        <div className="flex gap-4">
          <button className=" bg-white text-black px-4 py-2 border-2 cursor-pointer hover:bg-transparent hover:text-white" >
            SHOP NOW
          </button>
          <button className="text-white px-5 py-2  border-2 cursor-pointer hover:bg-black"> EXPLORE</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;