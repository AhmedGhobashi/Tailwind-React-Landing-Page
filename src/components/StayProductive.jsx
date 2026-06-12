

function StayProductive() {
  return (
    <section className="pb-[150px]">
        <div className="container grid grid-cols-1 md:grid-cols-2 gap-[30px] place-items-center">
            <div>
                <img  src="/src/assets/images/illustration-stay-productive.png" alt="'stay-productive" />
            </div>

            <div className="text-white">
                <h3 className="font-medium  text-[35px] leading-[50px]">
                    stay productive,
                    <br/>
                    wherever you are!
                </h3>
                <div className="my-[15px] text-sm font-normal tracking-[0.8px]">
                    <p className="mb-[15px]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatem quia animi aliquid cum commodi vero illum, iste consectetur ullam cumque. Ea quas animi, eum odio officia laboriosam magni adipisci.
                    </p>

                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi omnis, dolore nulla eligendi quae sapiente magni, aut reprehenderit expedita deserunt voluptas harum, officiis odit pariatur similique eveniet consequatur iusto minus.
                    </p>
                </div>
                <a href="/" className= "flex items-center gap-[15px]  text-cyan-300  hover:text-cyan-200 transition-color duration-200 border-b-2 border-cyan-300 pb-[3px] w-fit">see how fylo works
                <img src="/src/assets/images/icon-arrow.svg" alt="arrow-icon" className="w-[20px] object-contain h-[20px] animate-[moveRight_1s_ease-in-out_infinite]"/>
                </a>
            </div>
        </div>
    </section>
  )
}

export default StayProductive