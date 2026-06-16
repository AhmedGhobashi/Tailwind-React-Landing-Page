import { useState } from "react"
import {FaFacebookF, FaTwitter, FaInstagram} from 'react-icons/fa'

function Footer() {


  const [contact, setContact] = useState([
    {icon: "icon-phone.svg", title: "+201505892698"},
    {icon: 'icon-email.svg', title: "ahmed.osamaa200000@gmail.com"}]);

    const [links, setLinks] = useState([
    "About Us",
    "Contact Us",
    "Jobs",
    "Terms",
    "Press",
    "Privacy",
    "Blog",
  ]);

  const [socialIcons, setSocialIcons] = useState([
    "facebook",
    "twitter",
    "instagram",
  ]);

  return (
    <section className='pt-[320px] bg-[#0c1524] md:pt-[200px] pb-[100px] text-white'>
      <div className='container'>
        <a href='/' >
          <img src='/src/assets/images/logo.svg' alt='logo-image' className='object-contain w-[175px] h-[66px]' />
        </a>

        <div className="mt-[30px] flex justify-between flex-wrap flex-col md:flex-row gap-[30px]">
          <div className='flex items-start gap-[15px] w-[340px] max-w-full'>
            <img src='/src/assets/images/icon-location.svg' alt='location-icon'className='w-[18px] h-[18px]' />
            <p className='font-normal tracking-[0.8px] text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, optio. Architecto autem nesciunt aliquid maxime ab similique dicta harum, mollitia minus dolorum!</p>
          </div>

          <div>
            {contact.map((item)=>(
              <div key={item.title} className="flex items-center gap-[15px] mb-[15px] last-of-type:mb-[0]"> 
                <img src={`/src/assets/images/${item.icon}`} alt="icon" className="w-[18px] h-[18px]"  />
                <p className="">{item.title}</p>
              </div>
            ))}

          </div>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-[20px]">
            {links.map((item) => (
              <li key={item}>
                <a href={item.toLowerCase()} className=" hover:text-primary transition-all duration-200 text-base">
                  {item}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex gap-[15px] w-full justify-center md:w-auto">
            {socialIcons.map((item) => (
              <li key={item}>
                <a href={item} className="group">
                  <div className="w-[40px] h-[40px] element-center border border-white rounded-[50%]">
                    {item === "facebook" ? (
                      <FaFacebookF className=" group-hover:text-primary transition-all duration-200" />
                    ) : item === "twitter" ? (
                      <FaTwitter className=" group-hover:text-primary transition-all duration-200" />
                    ) : (
                      <FaInstagram className=" group-hover:text-primary transition-all duration-200" />
                    )}
                  </div>
                </a>
              </li>
            ))}
          </ul>


        </div>
      </div>

    </section>
  )
}

export default Footer