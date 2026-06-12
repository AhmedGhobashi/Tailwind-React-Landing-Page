

function TestimonialBox({desc, name, position, image}) {
  return (
    <div className="text-white bg-[#21293c] rounded-[5px] p-[30px] hover:shadow-[4px_4px_1px_8px_#1c202c] transition-shadow duration-150">
        <p className="font-normal tracking-[0.8px] text-sm mb-[30px]">{desc}</p>
        <div className="flex items-center gap-[15px]">
            <img src={`/src/assets/images/${image}`} className="w-[50px] h-[50px] rounded-full object-contain" />
            <div> 
                <strong className="block mb-[5px]"> {name}</strong>
                <p className="text-sm font-normal">{position}</p>
            </div>
        </div>
    </div>
  )
}

export default TestimonialBox;