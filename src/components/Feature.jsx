

function Feature({icon, title, desc}) {
  return (
    <div className="text-white element-center flex-col text-center">
        <img src={`/src/assets/images/${icon}`} className="w-[80px] h-[80px] object-contain" alt="icon-image" />
        <h4 className="text-xl my-[15px] font-semibold">{title}</h4>
        <p className="text-sm font-normal">{desc}</p>
    </div>
  )
}

export default Feature