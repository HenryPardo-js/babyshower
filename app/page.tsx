export default function Home() {
  return (
    <div className="bg-[url('/bg/bg1.png')] bg-cover bg-center min-h-screen flex items-center justify-center ">
      <div className="w-full h-full p-5"  >
        <div className="grid grid-cols-2" >
          <img src="/osoMain.png" alt="oso animado" className="w-full h-full object-cover animate-float" />
          <div className="w-full flex justify-center items-center">
            <div className="flex flex-col gap-4 w-full" >
              <div className="flex flex-col gap-0 items-center">
                <span className="text-[#2a2b2a] font-fredoka  text-xl ">Hola Henry! te invitamos a celebrar con nosotros el </span>
                <h1 className="text-[#628cca] font-distant text-9xl animate-fade-up animate-duration-1000 animate-delay-500" >Baby Shower</h1>
                <span className="text-[#2a2b2a] font-fredoka  text-xl">de nuestro amado hijo.</span>
              </div>
              <div className="flex flex-col gap-1 mt-5 justify-center items-center w-full  ">
                <div className="flex items-center gap-10 justify-center">
                  <span className="text-[#B78256] font-hachi text-3xl">{`SÁBADO`}</span>
                  <div className="h-6 w-px bg-[#B78256]"></div>
                  <span className="text-[#B78256] font-hachi text-3xl">{`05 Oct 15:00`}</span>
                  <span className="text-[#B78256] font-hachi text-3xl">{`05 Oct 15:00`}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
