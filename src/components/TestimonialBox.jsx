

function TestimonialBox({desc, name, position, image}) {
  return (
    <div>
        <p>{desc}</p>
        <div>
            <img src={`/src/assets/images/${image}`} />
        </div>
    </div>
  )
}

export default TestimonialBox;