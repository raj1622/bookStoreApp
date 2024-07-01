import list from "../../public/list.json"
import Cards from "./Cards";
import {Link} from "react-router-dom"

function Course() {
 
  return (
    < >
      <div className="h-[140px] dark:bg-slate-900"></div>
      <div className="dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20  text-center justify-content-center">
        <div>
          <h1 className="text-4xl ">We are delighted to have you <span className="text-pink-500">Here! :) </span> </h1>
          <p className="mt-7">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima odit iusto quas expedita tempore, vel id beatae laudantium repellendus, similique adipisci maxime! Assumenda ratione harum aliquam molestias consequatur, mollitia doloribus?
          Praesentium consequatur perspiciatis quos error debitis molestias libero quae in laudantium quam tempora animi pariatur, voluptatem eius inventore iure laborum? Reprehenderit quos quis culpa possimus, sit eos neque quaerat expedita.
          </p>
          <Link  to="/">
          <button className="mt-7 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">Back</button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-4">
          {
            list.map((item)=>(<Cards key={item.id} item={item}/>))
          }
        </div>
      </div>
    </>
  )
}

export default Course;