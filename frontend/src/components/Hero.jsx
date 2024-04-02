const Hero = () => {
  return (
    <div className="px-10 lg:px-20 py-20 mb-10 bg-[url('wick.jpg')] bg-center bg-cover text-white">
      <h1 className="text-4xl md:text-5xl font-bold">Hoşgeldin.</h1>
      <h2 className="text-2xl md:text-3xl my-3 font-semibold">
        Milyonlarca Film,Dizi ve Aktörleri Keşfet.
      </h2>

      <div className="relative rounded-full flex mt-5 overflow-hidden">
        <input
          className="w-full text-black pl-5 font-semibold p-2"
          placeholder="Film,Dizi,Aktör arayın..."
          type="text"
        />
        <button className="bg-blue-400 absolute end-0 h-full w-20 text-white font-semibold transition hover:bg-blue-500 ">
          Ara
        </button>
      </div>
    </div>
  );
};

export default Hero;
