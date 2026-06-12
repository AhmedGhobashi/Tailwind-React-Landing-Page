
import { useEffect, useState, useRef  } from "react"


function Header() {
    const [links, setLinks] = useState (["Features", "Team", "Signin"]);
    const theLinks = links.map((link, idx)=>{
       return( 
       <li key={idx}>
           <a href={`${link.toLowerCase()}`} className="text-white opacity-[0.9] hover:underline hover:opacity-[1] transition-[opacity] duration-200"> {link} </a>
        </li>
       );
    });

    // i want when i pass 100 by scrolling
    // i will do something to the <header> element
    // that's why i used useRef();
    const headerRef = useRef();
    

    useEffect (()=>{
        window.addEventListener("scroll", ()=>{
            console.log(window.scrollY);
            if(window.scrollY > 100){
                console.log (headerRef.current);
                headerRef.current.style.background = "#0c1524";
                headerRef.current.style.padding = "20px 0" ;
            }else {
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px 0" ;

            }
        });
    });

  return (
    <header ref={headerRef}  className="pt-[60px] fixed top-0 left-0 w-[100%] z-500 transition-all duration-200 ">
        <div className="container px-[60px] flex justify-between items-center gap-[30px] sm:gap-[0] flex-col sm:flex-row">
            <a href="/">
                <img src="/src/assets/images/logo.svg" alt="logo-svg" />
            </a>

            <nav>
                <ul className="flex items-center gap-[50px]">
                    {theLinks}
                </ul>
            </nav>
        </div>

    </header>
  )
}

export default Header