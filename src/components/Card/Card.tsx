import { Link } from "react-router-dom";
import { typeCard } from "../../utils/types";



export const Card = ({title, desc, link, img}: typeCard) => (
  <article className="max-w-xs bg-white">
    <header style={{backgroundImage: `url(${img})` }} 
      className="h-60 bg-no-repeat bg-bottom bg-cover"
    >
    </header>
    <div className="p-5">
      <h2 className="text-xl mb-3 uppercase font-bold">{title}</h2>
      
      <p className="text-lg mb-3 text-gray-500">{desc}</p>
    
      <Link 
        to={link}
        className="inline-flex text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-medium rounded-lg text-sm px-10 py-2.5 text-center mr-2 mb-2 uppercase"
       >
        train
        <svg aria-hidden="true" className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
      </Link>
    </div>
  </article>
)
