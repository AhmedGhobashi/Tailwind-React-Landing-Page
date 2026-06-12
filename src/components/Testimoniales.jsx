import { useState } from "react";
import TestimonialBox from "./TestimonialBox";

function Testimoniales() {
        const [testData, setTestData] = useState([
    {
      id: 1,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-1.jpg",
      position: "Founder & CEO, Huddle",
      name: "Ahmed",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-2.jpg",
      position: "Founder & CEO, Huddle",
      name: "Mohamed",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, aliquid. Cum quis animi repudiandae dolorum dolor qui, ducimus minus. Pariatur laboriosam quae numquam illo nisi quod! Quis, reprehenderit. Debitis, officiis!",
      image: "profile-3.jpg",
      position: "Founder & CEO, Huddle",
      name: "Eman",
    },
  ]);

  return (
    <section className="pb-[350px]">
        <div className="container">
            <div>
                <img src="/src/assets/images/bg-quotes.png" alt="quote" />
            </div>
            <div>
                {testData.map((item)=>{
                    return <TestimonialeBox key={item.id} desc= {item.desc} image = {item.image} name={item.name} position={item.position} />
                })}
            </div>

        </div>
    </section>
  )
}

export default Testimoniales;
