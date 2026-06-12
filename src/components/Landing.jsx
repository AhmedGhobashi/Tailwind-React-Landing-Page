

function Landing() {
  return (
    <section className="bg-[#1c2230]">
        <div className="container">
            <div className=" element-center flex-col pt-[200px]">

                <div className="w-[750px] max-w-full">
                    <img src="./src/assets/images/illustration-intro.png" alt="landing-image" className="w-full h-fit" />
                </div>
                <div className="text-white text-center">
                    <h1 className=" font-semibold text-[30px] md:text[40px] mb-[15px] ">
                        All your files in one secure location,
                        <br/>
                        accessible anywhere
                    </h1>

                    <p className="font-normal text-lg px-[30px] md:w-[600px] max-w-full md:mx-auto mb-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti laborum consequatur culpa? Eveniet repellendus quaerat iusto officiis facere. Nam, optio.
                    </p>
                </div>
                <a href="/"  className="btn w-[280px] h-[60px] rounded-[30px] element-center text-white font-medium ">Getting Started?</a>

            </div>

        </div>

        <div className="w-full h-[200px]">
            <img src="/src/assets/images/bg-curvy-desktop.svg" className="w-full h-full" alt="image"  />
        </div>
    </section>
  )
}

export default Landing